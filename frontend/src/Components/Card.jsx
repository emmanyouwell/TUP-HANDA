import React from 'react'

const Card = ({ title, description, img, tag1, tag2, isChk = false }) => {
    return (
        <div className="card w-96 bg-base-100 drop-shadow-xl">
            <div className="relative">

                <figure>
                    <img src={img} alt="Shoes" className="w-96 h-64 object-contain" />
                    {/* <div className="min-h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${img})`}}></div> */}
                </figure>

                <div className="relative h-2 w-full bg-gray-200">
                    <div className="badge badge-success text-white font-bold absolute left-0 -top-6">50%</div>
                    <div className="h-full bg-success" style={{ width: '50%' }}></div>
                </div>

            </div>

            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {isChk ? (<div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text me-3">Do you have me?</span>
                            <input type="checkbox" className="checkbox checkbox-success" />
                        </label>
                    </div>) : (<>
                        <div className="badge badge-outline">{tag1}</div>
                        <div className="badge badge-outline">{tag2}</div></>)}

                </div>
            </div>
        </div>
    )
}

export default Card