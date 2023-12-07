import axios from "axios";

const baseurl="http://localhost:8282/experts";
class ExpertService{
    getExperts(){
        return axios.get(baseurl);
    }

    getExpertById(expid){
        return axios.get(baseurl+"/"+expid)
    }

    getAssemblyList(expid){
        return axios.get("http://localhost:8282/assembly/"+expid)
    }
    
}
export default new ExpertService();