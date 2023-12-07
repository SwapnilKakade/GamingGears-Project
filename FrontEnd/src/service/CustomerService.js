import axios from "axios";

const baseurl = "http://localhost:8282/get-cart-product";
class ExpertService {

    getCart(custid) {
        return axios.get(baseurl + "/" + custid);
    }
    async addToCart(custId, proid) {

        try {
            console.log("product adding to cart " + custId);
            var response = await axios.post("http://localhost:8282/add-to-cart", {
                "custid": custId,
                "proid": proid
            });
           
            console.log("product added to cart " + custId);
            if (response.status === 200) {
                console.log("response data");
            } else {

                console.log('Authentication failed');
            }
        } catch (error) {
            console.error(error);
        }
        return response;
    }

    getOrders(custid){
        return axios.get(`http://localhost:8282/order/history/${custid}`)
    }
}
export default new ExpertService();