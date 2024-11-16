const stripe = require('stripe')('sk_test_51LiyTNSH4QsKt7gAYWZpIajuDuTSeWPEHeErouhsUMtjITkHYE1cLM96gn6LvqicLVyyuy0D32wz2IK60S74ERLy00xyqVFrDo');

const createCheckout = async(req, res) => {
    try{
        console.log(req.body);

        const lineItems = req.body.cart.map((cartItems)=>(
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: cartItems.product.name,
                        images: ['https://media.istockphoto.com/id/523761634/photo/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=TxsmORsbuY1LpxQsc6T8fpWJo7lBwncciYhroAr8rXI=']
                    },
                    unit_amount: cartItems.product.price * 100
                },
                quantity: cartItems.quantity
            }
            
        ));

        const customer = await stripe.customers.create({
            name:req.body.address.firstname,
            address:{
                line1:req.body.address.line_1,
                line2:req.body.address.line_2,
                city: req.body.address.city,
                state: req.body.address.state,
                country: 'in',
                postal_code:  req.body.address.postalcode
            }
        });

        console.log('lineItems=>',lineItems)

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/payment-successfull',
            cancel_url: 'http://localhost:3000/cancel',
            customer: customer.id
        });

        console.log(session);

        res.status(200).json({message:'success', session: session.id});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'internal server error'});
    }
};

module.exports = {
    createCheckout
}