import './Table.css'

export const Custom=()=>
{
    const match={
        borderRadius: '50px',
    }
    
    
    return(
        <>
        <a href="http://www.oracle.com">oracle</a> 
        <table style={match}>
            <thead>
                <tr>
                    <th> StudentName</th>
                    <th>StudentNumber</th>
                    <th>StudentDepartment</th>
                </tr>
            </thead>
            <tbody>
                <td>Mohana</td>
                <td>123456788</td>
                <td>EEE</td>
            </tbody>
            <tbody>
                <td>Mohan</td>
                <td>9876126788</td>
                <td>Mech</td>
            </tbody>

        </table>
        </>

    );
}
