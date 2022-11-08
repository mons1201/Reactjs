import './Table.css'

export const Custom=()=>
{
    const match={
        borderRadius: '50px',
    }
    
    
    return(
        <>
        {/* <a href="http://www.oracle.com">oracle</a> */}
        <table style={match}>
            <thead>
                <tr>
                    <th> StudentName</th>
                    <th>StudentNumber</th>
                    <td>StudentDepartment</td>
                </tr>
            </thead>
            <tbody>
                <th>Mohana</th>
                <th>123456788</th>
                <td>EEE</td>
            </tbody>

        </table>
        </>

    );
}
