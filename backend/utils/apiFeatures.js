const mongoose = require('mongoose')
class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    // http://locahost:4001/api/v1/products?keyword=usb
    search() {
        if (this.queryStr.keyword) {
            const keyword = {
                $regex: this.queryStr.keyword,
                $options: 'i'
            };

            this.query = this.query.find({
                $or: [
                    { firstName: keyword },
                    { lastName: keyword },
                    { email: keyword },
                    { city: keyword },
                    { address: keyword },
                    { country: keyword },
                    { title: keyword },
                    { department: keyword },
                    { course: keyword },
                    { slug: keyword },


                    // Add other fields you want to search by
                ]
            });
        }

        return this;
    }

    filter() {

        const queryCopy = { ...this.queryStr };
        // console.log(queryCopy);
        // Removing fields from the query
        const removeFields = ['keyword', 'limit', 'page']
        removeFields.forEach(el => delete queryCopy[el]);

        // Check if category field is present
        if (queryCopy.category) {
            queryCopy.category = new mongoose.Types.ObjectId(queryCopy.category);
        }
        // Advance filter for price, ratings etc
        let queryStr = JSON.stringify(queryCopy);
        // console.log(queryStr);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)


        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }


}
module.exports = APIFeatures