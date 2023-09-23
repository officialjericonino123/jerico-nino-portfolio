import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid place-items-center w-full h-full my-[120px] p-[20px]">
      <div className="flex justify-center mb-[30px]">
        <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] text-center uppercase font-[] font-[700]">
          Frequently Asked Questions
        </span>
      </div>

      <div className="grid w-full sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[1300px] h-full shadow-xl p-[20px] md:p-[30px]  bg-black rounded-xl text-white gap-[20px]">

        {/* Question 1 */}
        <div className="border-b-[1px]">
          
          <div
            onClick={() => handleQuestionClick(0)}
            className="flex justify-between items-center hover:text-[#f12020] duration-300 ease-in-out cursor-pointer"
          >
            <span className="font-[Montserrat] uppercase">How to Order?</span>
            <FaAngleDown />
          </div>

          {/* Content */}
          {activeIndex === 0 && (
            <div className="p-[20px]">
            If you are interested in any of our products and wish to purchase it, please follow our instruction on how to place an order. <br></br><br></br>

            STEP 1<br></br><br></br>

            -Click on the product that you are interested in.<br></br><br></br>

            -Choose the size of the product.<br></br><br></br>

            -You can also change the color of the product (if available) by clicking on the selected thumbnail.<br></br><br></br>

            -Click "ADD TO BASKET" button on the right bottom.<br></br><br></br>

            -Now you can continue shopping or check your shopping cart's contents, by clicking on the cart icon in the upper right-hand corner.<br></br><br></br>

            -When you click on the shopping cart's icon, it's content will show up on the right. If you want to buy all of the items, click on the "BASKET" button.<br></br><br></br>

            STEP 2<br></br><br></br>

            -In the shopping cart's preview you can see a list of the products you have chosen, together with their quantity and price.<br></br><br></br>

            -if you want to remove a product from the shopping cart, click on the "X" on the right side of the price. If you want to change the quantity, click on +/- button next to the quantity and wait for the moment. In a short while, the shopping cart will be updated.<br></br><br></br>

            -if you have a promo code, click on the "PROMO CODE" button on the left and a box will Pop up. Enter your promo code in the box and click "APPLY". If the code is correct, the price will be reduced. If the price does not change, please check the promotion's rule and conditions and make sure that it applies to the items in your cart.<br></br><br></br>

            -To continue, click "PROCEED TO CHECKOUT"<br></br><br></br>

            STEP 3<br></br><br></br>

            -If you are registered customer, please sign in. If not, you can sign up by clicking on "LOGIN" button and Click "Signup"<br></br><br></br>

            STEP 4<br></br><br></br>

            -Enter your shipping details by filling in all fields marked with an "*". Ensure that your data is correct then select your preferred shipping method.<br></br><br></br>

            STEP 5<br></br><br></br>

            -After logging in, Signing up or entering shipping details, please select preffered shipping method. The tables presents available shipping method together with shipping costs and estimated delivery times.<br></br><br></br>

            STEP 6<br></br><br></br>

            -Select your payment method:<br></br><br></br>

            GCASH<br></br>
            BANK TRANSFER<br></br>
            Cash On Delivery<br></br>
            </div>
          )}
        </div>

        {/* Question 2 */}
        <div className="border-b-[1px]">
          
          <div
            onClick={() => handleQuestionClick(1)}
            className="flex justify-between items-center hover:text-[#f12020] duration-300 ease-in-out cursor-pointer"
          >
            <span className="font-[Montserrat] uppercase">How do I Return a wrong or damaged product?</span>
            <FaAngleDown />
          </div>

          {/* Content */}
          {activeIndex === 1 && (
            <div className="p-[20px]">
                UNBOXING VIDEO POLICY<br></br><br></br>

                Kindly take a video while opening your package. If you have claims of damaged, wrong or missing item/s, we'll need a video as proof.<br></br><br></br>

                If a wrong package has been delivered, kindly email (hugoteroclothing@gmail.com) with the subject: "ORDER NUMBER + WRONG ITEM".<br></br><br></br>

                Please attach the unboxing video of the wrong items recieved so that the online team can see and coordinate with you on how to return/replace the product.<br></br><br></br>

                "REMINDER! NO VIDEO, NO RETURN POLICY! THANK YOU!""
            </div>
          )}
        </div>

        {/* Question 3 */}
        <div className="border-b-[1px]">
          
          <div
            onClick={() => handleQuestionClick(2)}
            className="flex justify-between items-center hover:text-[#f12020] duration-300 ease-in-out cursor-pointer"
          >
            <span className="font-[Montserrat] uppercase">How Can I Track My Order?</span>
            <FaAngleDown />
          </div>

          {/* Content */}
          {activeIndex === 2 && (
            <div className="p-[20px]">
                Tracking only starts once the courier has picked up your order from us. Orders are picked up the following working days if you order before 2PM.<br></br><br></br>

                Once your order has been picked up, you will recieve an email notification:"Your order has been scheduled for pick-up!" Click the "VIEW ORDER" button and it will show your order status page. The tracking number will be updated there.<br></br><br></br>

                Weekends and holidays are not included for pick-up schedule.
            </div>
          )}
        </div>

        {/* Question 4 */}
        <div className="border-b-[1px]">
          
          <div
            onClick={() => handleQuestionClick(3)}
            className="flex justify-between items-center hover:text-[#f12020] duration-300 ease-in-out cursor-pointer"
          >
            <span className="font-[Montserrat] uppercase">Can I Cancel My Order?</span>
            <FaAngleDown />
          </div>

          {/* Content */}
          {activeIndex === 3 && (
            <div className="p-[20px]">
                Once order has been shipped, cancellation is no longer allowed. If you would like to cancel, email (hugoteroclothing@gmail.com) within 1 HOUR of ordering. Email subject should be: "ORDER NUMBER + CANCEL ORDER".<br></br><br></br>

                Please note that we cannot guarantee order cancellations requested beyond 2PM on working days, and requests made on weekends/holidays. cancellations should be made within 1 hour or ordering.<br></br><br></br>

                Please do not create a new order until we have confirmed cancellation and acknowledgement of your request.<br></br><br></br>
            </div>
          )}
        </div>

        {/* Question 5 */}
        <div className="border-b-[1px]">
          
          <div
            onClick={() => handleQuestionClick(4)}
            className="flex justify-between items-center hover:text-[#f12020] duration-300 ease-in-out cursor-pointer"
          >
            <span className="font-[Montserrat] uppercase">How Much Is The Shipping Fee?</span>
            <FaAngleDown />
          </div>

          {/* Content */}
          {activeIndex === 4 && (
            <div className="p-[20px]">
                The shipping fee is dependent on your LOCATION AND THE WEIGHT OF THE ITEMS. The more shirts you buy, the lower the delivery fee will be!
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Faqs;
