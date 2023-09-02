import axios from "axios";

export default ( url: string = "http://localhost:8081" ) => {

    return axios.create({
        baseURL: url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJyb25zemNrYUBnbWFpbC5jb20iLCJpYXQiOjE2OTM2Nzc3NzksImV4cCI6MTY5Mzc2NDE3OX0.j_Hkt49-aPJnGwzGcBULnSX8_guVVlKNWzlXm4Rdm-jdqpkFrB_QWPl_4LJW4Mut"
        }
    });

}