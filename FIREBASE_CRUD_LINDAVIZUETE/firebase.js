
            // Import the functions you need from the SDKs you need
                import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
                import { getFirestore , 
                        collection, 
                        addDoc, getDocs, 
                        onSnapshot, deleteDoc,doc, 
                        getDoc,
                        updateDoc,
                        } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
        
        
                    // TODO: Add SDKs for Firebase products that you want to use
                    // https://firebase.google.com/docs/web/setup#available-libraries
        
                    // Your web app's Firebase configuration
                const firebaseConfig = {
        
        
                        apiKey: "AIzaSyDJ9oXKU2FUbJICBbdF4F72TOXYP1A6SYA",
                        authDomain: "crud-firebase-aaf20.firebaseapp.com",
                        projectId: "crud-firebase-aaf20",
                        storageBucket: "crud-firebase-aaf20.appspot.com",
                        messagingSenderId: "497923228053",
                
                        appId: "1:497923228053:web:6fe4f0ff80da03bfb8369c"
        };
                    // Initialize Firebase
                const app = initializeApp(firebaseConfig);

                const db = getFirestore();
                export const saveTask = (title, description) =>
                addDoc(collection(db,"tasks"), {title,description});
                export const getTasks = () => getDocs(collection(db,'tasks'));
                export const onGetTasks = (callback) => onSnapshot(collection(db,'tasks'), callback)
                export const deleteTask = id => deleteDoc(doc(db,'tasks',id));
                export const getTask = id => getDoc(doc(db,'task',id));
                export const updateTask =(id, newFields)=> updateDoc(doc(db,'tasks',id), newFields);
            

            
        