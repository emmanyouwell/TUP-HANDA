import React from 'react'

const ChecklistCard = ({ img, title, description, percent, color}) => {
    return (
        <div className="card min-w-24 max-w-96 bg-base-100 drop-shadow-xl h-full">
            <div className="relative h-full flex justify-center ">

                <figure className="bg-base-200">
                    <img src={img} alt="Shoes" className="max-w-64 max-h-64 object-center" loading="lazy"/>
                    {/* <div className="min-h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${img})`}}></div> */}
                </figure>

              

            </div>

            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className={`badge badge-${color} text-white`}>{percent}% recommended</div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text me-3">Do you have me?</span>
                            <input type="checkbox" className="checkbox checkbox-success" />
                        </label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChecklistCard