function Box(i) {
    return (
        <>

            <div className="col-sm-6">
                <div className="box mb-3 d-flex gap-5">
                    <div className="img">
                        <img src={i.img} alt="" />
                    </div>
                    <div className="content">
                        <h5>{i.id}</h5>
                        <h5>{i.name}</h5>
                        <h5>{i.gender}</h5>
                        <h5>{i.species}</h5>
                    </div>
                </div>
            </div>
           
        </>
    )
}
export default Box