function Tombol(a){
    const tamp=()=>{
        return alert (`Anda telah mengklik tombol ${a.nama}`);
    };
    return(
        <div>
            <button onClick={tamp}>{a.nama}</button>
        </div>
    )
}
export default Tombol;