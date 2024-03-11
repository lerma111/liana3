const Feed = ({ date }) => {


    //date into desired form

    let formatted = { day:"numeric", month:"numeric", year:"numeric" }
    let articleDate = new Date(date)
    .toLocaleDateString("fi-FI", formatted)

    return (
        <>
            <p>{articleDate}</p>
        </>
        
    )
}

export default Feed;