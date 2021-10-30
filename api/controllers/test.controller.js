

import express from 'express'
const result = {};
result.getDetail = async (req, res) => {
   
    return res.json({
        data: {
            api:true
        
        }
    });
}
export default result;