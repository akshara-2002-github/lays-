import React, { useState } from "react";
import CommanFooter from "../Footer/CommanFooter";
// import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
// import { notification } from "antd";




import {
  Row,
  Col,
  Card,
  // Button,
  // Badge,
  // Avatar,
  // Drawer,
  // List,
  // Input,
} from "antd";
import { Link } from "react-router-dom";





export default function Recipes() {
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })
  const [searchText, setSearchText] = useState("");
  // const [cartItems, setCartItems] = useState([]);

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      image:
        "https://lays.com/sites/lays.com/files/2022-05/Cheddar%20and%20Chive%20Mashed%20Potatoes-029_1200x1200_0.png",
      name: "LAY’S® Cheddar and Chive Mashed Potatoes",
      qty: 1,
    },
    {
      id: 2,
      image:
        "https://lays.com/sites/lays.com/files/2022-05/Lays%20One%20Bite%20Shepherds%20Pies-039_1200x1200.png",
      name: "Mini LAY’S® Shepherd’s Pies",
      qty: 1,
    },
    {
      id: 3,
      image:
        "https://lays.com/sites/lays.com/files/2022-03/Loaded%20Eggs%20on%20Potato%20Chips-014-1200x1200.png",
      name: "Loaded Eggs on LAY’S® Wavy Potato Chips",
      qty: 1,
    },
    {
      id: 4,
      image:
        "https://lays.com/sites/lays.com/files/2022-11/Lays%20Ahmad%27s%20Photo%20%281%29.jpeg",
      name: "LAY’S® Leftover Turkey Wrap",
      qty: 1,
    },
    {
      id: 5,
      image:
        " https://lays.com/sites/lays.com/files/2022-05/3%20Ingriedient%20Mashed%20potatoes-037_1200x1200.png",
      name: "LAY’S® Mashed Potatoes",
      qty: 1,
    },
    {
      id: 6,
      image:
        "https://lays.com/sites/lays.com/files/2022-03/Chip%20Caramelized%20Onion%20Frittata-021-1200x1200.png",
      name: "LAY’S® Potato Chip Caramelized Onion Frittata",
      qty: 1,
    },
    {
      id: 7,
      image:
        "https://lays.com/sites/lays.com/files/2022-03/Fully%20Loaded%20Baked%20Potato%20Dip-011-1200x1200.png",
      name: "LAY’S® Wavy Fully Loaded Potato Dip",
      qty: 1,
    },
    {
      id: 8,
      image:
        "https://lays.com/sites/lays.com/files/2022-02/Lays%20BBQ%20Pulled%20Pork%20Sliders-032-1200x1200.png",
      name: " LAY´S® BBQ Pulled Pork Sliderss",
      qty: 1,
    },
    {
      id: 9,
      image:
        " https://lays.com/sites/lays.com/files/2022-02/Lays%20Sour%20Cream%20%26%20Onion%20Bloom-072-1200x1200.png",
      name: " LAY´S® Sour Cream & Onion Bloom",
      qty: 1,
    },
  ]);
  // const [open, setOpen] = useState(false);
  // const showDrawer = () => {
  //   setOpen(true);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };

  // const addORDelFromCart = (item, actionType) => {
  //   let itemExist = cartItems.findIndex((c) => c?.id === item?.id);

  //   if (itemExist > -1) {
  //     if (actionType === "+") {
  //       item.qty = item.qty + 1;
  //     } else {
  //       if (item.qty === 1) {
  //         removeCart(item);
  //       } else {
  //         item.qty = item.qty - 1;
  //       }
  //     }
  //     cartItems[itemExist] = item;
  //   } else {
  //     setCartItems([...cartItems, item]);
  //   }

  //   if (actionType === "+") {
  //     notification["success"]({
  //       message: "Item quantity increased successfully",
  //     });
  //   } else {
  //     notification["success"]({
  //       message: "Item quantity decreased successfully",
  //     });
  //   }
  // };

  // const removeCart = (item) => {
  //   let initialCartItems = cartItems;
  //   initialCartItems.pop();
  //   setCartItems(initialCartItems);

  //   setOpen(false);
  //   setTimeout(() => {
  //     setOpen(true);
  //   }, 300);

  //   let data = cartItems.filter((c) => c?.id !== item?.id);
  //   setCartItems(data);
  //   notification["success"]({
  //     message: "item remove from cart successfully",
  //   });
  // };

  // const addToCart = (item) => {
  //   let itemExist = cartItems.findIndex((c) => c?.id === item?.id);
  //   if (itemExist > -1) {
  //     item.qty = item.qty + 1;
  //     cartItems[itemExist] = item;
  //   } else {
  //     setCartItems([...cartItems, item]);
  //   }
  //   // notification["success"]({
  //   //   message: "added to cart successfully",
  //   // });
  // };

  // const deleteFromCart = (item) => {
  //   let itemExist = cartItems.findIndex((c) => c?.id === item?.id);

  //   if (itemExist > -1) {
  //     item.qty = item.qty - 1;
  //     cartItems[itemExist] = item;
  //   } else {
  //     setCartItems([...cartItems, item]);
  //   }

  //   // notification["success"]({
  //   //   message: "added to cart successfully",
  //   // });
  // };

  const Recipes = (item) => {
    return (
      <Col span={8}>
        <Row style={{ justifyContent: "center", display: "flex" }}>
          <Card
            hoverable
            bodyStyle={{ border: 0, padding: 0, borderRadius: "5px" }}
            onMouseOver={()=>setState({ raised: true, shadow:3})} 
            onMouseOut={()=>setState({ raised:false, shadow:1 })} 
            raised={state.raised} zDepth={state.shadow}
            style={{ maxWidth: 310,}}
          >

            <img
              src={item.image}
              alt={item.name}
              width="400px"
              height="400px"
             
            ></img>
            <div
              style={{
                backgroundColor: "white",
                width: "400px",
                height: "190px",
                padding: "30px",
                fontFamily: "roboto",
              }}
            >
              <h1 style={{ fontSize: "23px",fontFamily: "'Josefin Sans', sans-serif", }}>
                <b>{item.name}</b>
              </h1>
              <br />
              {/* <Row justify={"space-between"}>
                <Col> */}
              <button
                style={{
                  // borderRadius: "15px",
                  backgroundColor: "#74B723",
                  color: "black",
                  borderColor: "#74B723",
                  fontSize: "20px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                marginLeft:"90px"
                }}
              >
                <Link style={{ color: "black" }} to="/CheddarPotatoes">
                  View Recipe
                </Link>
              </button>
              {/* </Col> */}
              {/* <Col>
                  <Button onClick={() => addORDelFromCart(item, "+")}>
                  <Link style={{ color: "black" }} to="/CheddarPotatoes">
                      View Recipe
                    </Link>
                  </Button>
                </Col> */}
              {/* </Row> */}
            </div>
          </Card>
        </Row>
      </Col>
    );
  };

  // // const getCartItems = () => {
  // //   return (
  // //     <div >
  //   /* <List
  //         dataSource={cartItems}
  //         bordered
  //         renderItem={(item) => (
  //           <List.Item>
  //             <List.Item.Meta
  //               avatar={<Avatar src={item.image} size={"large"} />}
  //               title={<a href="https://ant.design/index-cn">{item.name}</a>}
  //             />{" "}
  //             <Row justify={"space-between"}>
  //               <Col span={12}>
  //                 <Button onClick={() => removeCart(item)}>
  //                   <DeleteOutlined style={{ fontSize: "25px" }} /> Remove
  //                 </Button>
  //               </Col>
  //               <Col span={12}>
  //                 <Row justify={"space-between"}>
  //                   <Col>
  //                     <Button
  //                       style={{ width: "30px" }}
  //                       onClick={() => addORDelFromCart(item, "-")}
  //                     >
  //                       -
  //                     </Button>
  //                   </Col>
  //                   <Col>
  //                   <p style={{ width: "20px" }}>{item.qty} </p>
  //                   </Col>
  //                   <Col>
  //                     <Button
  //                       style={{ width: "30px" }}
  //                       onClick={() => addORDelFromCart(item, "+")}
  //                     >
  //                       +
  //                     </Button>
  //                   </Col>
  //                 </Row>
  //               </Col>
  //             </Row>
  //           </List.Item>
  //         )}
  //       />
  //     </div>
  //   );
  // }; */
  

  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/62/a6/b0/62a6b02a77c84bfdaaed8637ed0fccb3.jpg")`,
      }}
    >
      <div
        style={{
          width: "1688px",
          height: "2100px",
          // backgroundImage:`url("https://i.pinimg.com/564x/34/9e/3b/349e3b03076a00e6de63cef447c814f5.jpg")`,
          justifyContent: "center",
        }}
      >
        {/* <Row style={{ padding: "20px" }} justify={"space-between"}>
          <Col> */}
        <h1
          style={{
            fontFamily: "serif",
            fontSize: "75px",
            color: "black",
            marginLeft: "70px",
            padding: "40px",
          }}
        >
          Recipes
        </h1>
        {/* </Col>

          <Col>
            <Row gutter={[16, 16]}>
              <Col>
                <Input onChange={(e) => setSearchText(e.target.value)} />
              </Col>

              <Col onClick={() => showDrawer()}>
                <Badge count={cartItems.length} showZero>
                  <Avatar shape="square">
                    <ShoppingCartOutlined
                      style={{ fontSize: "25px", color: "black" }}
                    />
                  </Avatar>
                </Badge>
              </Col>
            </Row>
          </Col>
        </Row> */}

        {/* <h1 style={{color:"black",fontSize:"25px",fontFamily:"times new romen",marginLeft:"70px"}}>{searchText}</h1> */}

        {/* <Row>{getCartItems()}</Row> */}

        <Row gutter={[0, 50]} justify={"space-between"}>
          {recipes
            .filter((i) =>
              i.name
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
            )
            .map((item) => Recipes(item))}
        </Row>

        <br />
        {/* <Button style={{ marginLeft: "700px" }}>load more</Button> */}
        {/* <Drawer
          width={400}
          placement="right"
          closable={true}
          onClose={onClose}
          open={open}
          title={"Cart items (" + cartItems.length + ")"}
        >
          {getCartItems()}
        </Drawer> */}
      </div>
      <CommanFooter />
    </div>
  );
}
