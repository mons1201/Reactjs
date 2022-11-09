import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Smile=()=>
{
    const Click=()=>
    {
        alert("Wake Up...!")
    }
    return(
        <>
        <button className="btn btn-outline-info" onClick={Click}>
            alert<i class="bi bi-alarm-fill"></i>
        </button>
        </>

    );
}
