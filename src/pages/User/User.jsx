import { useEffect, useState } from "react";
import { setProfile, setUserName } from "../../app/store";
import "./User.css"
import TransactionSummary from "../../components/TransactionSummary/TransactionSummary"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function User() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state => state.token)
    const firstName = useSelector(state => state.user.firstName)
    const lastName = useSelector(state => state.user.lastName)
    const userName = useSelector(state => state.user.userName);

    const [editedUserName, setEditedUserName] = useState("")
    const [openForm, setOpenForm] = useState(false)

    function handleOpenForm() {
        setOpenForm(!openForm)
    }

    useEffect(() => {
        if (!token) {
            navigate("/sign-in");
            return;
        }

        async function userCheck() {
            const userFetch = await fetch("http://localhost:3001/api/v1/user/profile",
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                })

            const userData = await userFetch.json();
            setEditedUserName(userName)
            dispatch(setProfile(userData.body))
        }

        userCheck()

    }, [dispatch, navigate, token, userName])



    const handleUserNameForm = async (evt) => {
        evt.preventDefault();
        const userName = evt.currentTarget.userName.value;
        const changeUserName = await fetch("http://localhost:3001/api/v1/user/profile",
            {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName: editedUserName }),
            })

        if (!changeUserName.ok) {
            throw new Error("Echec de la modification")
        } else {
            dispatch(setUserName(userName))
            handleOpenForm()

        }
    }


    return (
        <main className="main bg-dark">

            {!openForm ?
                <div className="header" onClick={handleOpenForm}>
                    <h1>Welcome back<br />{`${userName}`}</h1>
                    <button className="edit-button" >Edit Name</button>
                </div>
                :
                <div className="username-form">
                    <h1>Edit user info</h1>
                    <form onSubmit={handleUserNameForm}>
                        <div className="username-input">
                            <label htmlFor="userName">User name</label>
                            <input type="userName" id="userName" value={editedUserName} onChange={(e) => setEditedUserName(e.target.value)} />
                        </div>
                        <div className="username-input">
                            <label htmlFor="firstName">First name</label>
                            <input type="firstName" id="firstName" disabled="disabled" placeholder={`${firstName}`} />
                        </div>
                        <div className="username-input">
                            <label htmlFor="lastName">Last name</label>
                            <input type="lastName" id="lastName" disabled="disabled" placeholder={`${lastName}`} />
                        </div>
                        <div className="editors-button">
                            <button className="editor-button" type="submit" >Save</button>
                            <button className="editor-button" onClick={handleOpenForm} > Cancel</button>
                        </div>
                    </form>
                </div >
            }
            <h2 className="sr-only">Accounts</h2>
            <TransactionSummary
                name={"Argent Bank Checking (x8349)"}
                amount={"$2,082.79"}
                balance={"Available Balance"}
            />
            <TransactionSummary
                name={"Argent Bank Savings (x6712)"}
                amount={"$10,928.42"}
                balance={"Available Balance"}
            />
            <TransactionSummary
                name={"Argent Bank Credit Card (x8349)"}
                amount={"$184.30"}
                balance={"Current Balance"}
            />
        </main >

    );
}

