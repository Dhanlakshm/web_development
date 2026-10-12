//Types of componenets --> functional and class components
//conditional rendering --->
//React State--> Hooks---> useState() ---> capture your changing values in the webpage
function Header({name, age, isLoggedIn, student}) {
    return(
        <>
            <h3>Header component</h3>
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <h4>{isLoggedIn?"loogedIN":"invalid details"}</h4>
            <h4>Student name: {student.name}</h4>
        
        </>
    );
}

export default Header;