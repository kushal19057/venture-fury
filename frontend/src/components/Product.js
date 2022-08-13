import React, { useState, useEffect } from "react";

function Product() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("/getproducts")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
        return () => {};
    }, []);

    let List = "";
    if (data) {
        List = data.forEach((item) => (
            <div className="card" style="width: 1.8rem;">
                {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
                <div className="card-body">
                    <h5 className="card-title">{item.product_name}</h5>
                    <p className="card-text">{item.short_desc}</p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        ));
    }

    return (
        <div className="col-12">
            <div>Most Loved products</div>
            <div>{List}</div>
        </div>
    );
}

export default Product;
