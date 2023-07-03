import React, { useState } from "react";
import {
  Col,
  Row,
  Input,
  Card,
  Badge,
  Avatar,
  Button,
  Drawer,
  List,
} from "antd";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import CommanFooter from "../Footer/CommanFooter";
import { notification } from "antd";


export default function Products() {
  const [searchText, setSearchText] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://lays.com/sites/lays.com/files/2020-11/Cheddar-Jalapeno_0.jpg",
      title: "LAY'S® Cheddar Jalapeño Flavored Potato Chips",
      price: "Rs.20",
      color: "orange",
      qty: 1,
    },
    {
      id: 2,
      image:
        "https://lays.com/sites/lays.com/files/2020-11/lays-Classic-small.jpg",
      title: "LAY'S® Classic Flovored Lays  Potato Chips",
      price: "Rs.20",
      color: "#FEE254", //lightyellow
      qty: 1,
    },
    {
      id: 3,
      image:
        "https://lays.com/sites/lays.com/files/styles/product_thumbnail/public/2020-11/lays-bbq.jpg?itok=u27sQU-l",
      title: "LAY'S® BBQ Flavored  Lays Potato Chips",
      price: "Rs.20",
      color: "#605956", //darkgrey
      qty: 1,
    },
    {
      id: 4,
      image:
        "https://lays.com/sites/lays.com/files/styles/product_thumbnail/public/2020-11/sour-cream.jpg?itok=uNfw9k9G",
      title: "LAY'S® Sour Cream & Onion Flavored Potato Chips",
      price: "Rs.20",
      color: "#2D984A", //darkrgeen
      qty: 1,
    },
    {
      id: 5,
      image: "https://lays.com/sites/lays.com/files/2019-09/CheddarSC_0.png",
      title: "LAY'S® Cheddar & Sour Cream Flavored Potato Chips",
      price: "Rs.20",
      color: "#E65010", //redorange
      qty: 1,
    },
    {
      id: 6,
      image:
        "https://lays.com/sites/lays.com/files/2022-05/XL%20Lays%20Flamin%20Hot%20New.png",
      title: "LAY'S® Flamin' Hot Flavored Potato Chips",
      price: "Rs.20",
      color: "#C32424", //redDARK
      qty: 1,
    },

    {
      id: 7,
      image: "https://lays.com/sites/lays.com/files/2019-09/S%26V.png",
      title: "LAY'S® Salt & Vinegar Flavored Potato Chips",
      price: "Rs.20",
      color: "#49A9D9", //LIGHTBLUE
      qty: 1,
    },

    {
      id: 8,
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20Lay%27s%20Sweet%20Southern%20Heat%20BBQ.png",
      title: "LAY'S® Sweet Southern Heat BBQ Flavored Potato Chips",
      price: "$10.00",
      color: "brown",
      qty: 1,
    },
    {
      id: 9,
      image: "https://lays.com/sites/lays.com/files/2019-09/HBBQ.png",
      title: "LAY'S® Honey BBQ Flavored Potato Chips",
      price: "Rs.20",
      color: "#E1AD01", //GOLD
      qty: 1,
    },

    {
      id: 10,
      image:
        "https://lays.com/sites/lays.com/files/2022-02/XL%20Lay%27s%20Chile%20Limon_2.png",
      title: "LAY'S® Chile Limón Flavored Potato Chips",
      price: "Rs.20",
      color: "#EC254D", //pink
      qty: 1,
    },

    {
      id: 11,
      image: "https://lays.com/sites/lays.com/files/2022-02/LIMON_2.png",
      title: "LAY'S® Limón Flavored Lays Potato Chips",
      price: "Rs.20",
      color: "#99D227", //lemngreen
      qty: 1,
    },
    {
      id: 12,
      image:
        "https://lays.com/sites/lays.com/files/2019-09/Dill%20Pickle%5B2%5D.png",
      title: "LAY'S® Dill Pickle Flavored Potato Chips",
      price: "Rs.20",
      color: "#A8BD1D", //dullgreen
      qty: 1,
    },
    {
      id: 13,
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20Lay%27s%20Flamin%20Hot%20Dill%20Pickle.png",
      title: "LAY'S® Flamin' Hot Dill Pickle Flavored Potato Chips",
      price: "Rs.20",
      color: "#B71797", //VIOLET
      qty: 1,
    },
    {
      id: 14,
      image:
        "https://lays.com/sites/lays.com/files/2019-09/Chesapeake%20Bay%20Crab%20Spice.png",
      title: "LAY'S® Chesapeake Bay Crab Spice Flavored Potato Chips",
      price: "Rs.20",
      color: "#34D1CC",
      qty: 1,
    },
    {
      id: 15,
      image:
        "https://lays.com/sites/lays.com/files/2019-09/Wavy%20Original_0.png",
      title: "SABRITAS® Adobadas Flavored Potato Chips",
      price: "Rs.20",
      color: "#C32424", //red
      qty: 1,
    },
    {
      id: 16,
      image: "https://lays.com/sites/lays.com/files/2019-09/LS%20BBQ.png",
      title: "LAY'S® Lightly Salted  LaysPotato Chips",
      price: "Rs.20",
      color: "#C8EDEC", //LIGHTESTBLUE
      qty: 1,
    },
    {
      id: 17,
      image:
        "https://lays.com/sites/lays.com/files/2022-08/1%20Lays%20Kettle%20Cooked%20Fat%20Reduced%20%281%29.png",
      title: "LAY'S® Kettle Cooked Reduced Fat Original Potato Chips",
      price: "Rs.20",
      color: "#FEE254", //lightyellow
      qty: 1,
    },
    {
      id: 18,
      image:
        "https://lays.com/sites/lays.com/files/2019-01/Lay%27s%20Simply%20BBQ%20Thick%20Cut.jpg",
      title: "LAY'S® Simply BBQ Flavored Thick Cut Potato Chips",
      price: "Rs.20",
      color: "#605956", //darkgrey
      qty: 1,
    },
    {
      id: 19,
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20Lays%20Simply%20Sea%20Salted.png",
      title: "LAY'S® Simply Sea Salt Flavored Thick Cut Potato Chips",
      price: "Rs.20",
      color: "#E1AD01", //GOLD
      qty: 1,
    },
    {
      id: 20,
      image:
        "https://lays.com/sites/lays.com/files/2022-08/0.02%20BAKED%20BBQ%20%281%29.png",
      title: "LAY'S® Baked BBQ Flavored Potato Crisps",
      price: "Rs.20",
      color: "grey",
      qty: 1,
    },
    {
      id: 21,
      image:
        "https://lays.com/sites/lays.com/files/2022-08/0.01%20LAYS%20BAKED%20ORIGINAL%20%281%29.png",
      title: "LAY'S® Baked Original Lays Potato Crisps",
      price: "Rs.20",
      color: "#FEE254", //lightyellow
      qty: 1,
    },
    {
      id: 22,
      image:
        "https://lays.com/sites/lays.com/files/2021-07/French%20Onion%20Dip.png",
      title: "Lay's® French Onion Dip",
      price: "Rs.20",
      color: "brown",
      qty: 1,
    },
    {
      id: 23,
      image:
        "https://lays.com/sites/lays.com/files/2021-07/Smooth%20Ranch%20Dip.png",
      title: "Lay's® Smooth Ranch Dip",
      price: "Rs.20",
      color: "#3F36BD", //darkblue
      qty: 1,
    },
    {
      id: 24,
      image:
        "https://lays.com/sites/lays.com/files/2021-07/Stax%20Xtra%20Flamin%20Hot.png",
      title: "LAY'S® STAX® XTRA Flamin' Hot Flavored Potato Crisps",
      price: "Rs.20",
      color: "#C32424", //redDARK
      qty: 1,
    },
    {
      id: 25,
      image:
        "https://lays.com/sites/lays.com/files/2021-07/Stax%20Original.png",
      title: "LAY'S® STAX® Original Potato Crisps",
      price: "Rs.20",
      color: "#FEE254", //lightyellow
      qty: 1,
    },
    {
      id: 26,
      image: "https://lays.com/sites/lays.com/files/2021-07/Stax%20SCO_0.png",
      title: "LAY'S® STAX® Sour Cream & Onion Flavored Potato Crisps",
      price: "Rs.20",
      color: "#2D984A", //darkrgeen
      qty: 1,
    },
    {
      id: "27",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/Stax%20Mesquite%20BBQ.png",
      title: "LAY'S® STAX® Mesquite BBQ Flavored Potato Crisps",
      price: "Rs.20",
      color: "#A94444", //redDARK
      qty: 1,
    },
    {
      id: "28",
      image: "https://lays.com/sites/lays.com/files/2021-07/Stax%20Cheddar.png",
      title: "LAY'S® STAX® Cheddar Flavored Potato Crisps",
      price: "Rs.20",
      color: "#FE8325", //ordange
      qty: 1,
    },
    {
      id: "29",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/Stax%20Salt%20and%20Vinegar.png",
      title: "LAY'S® STAX® Salt & Vinegar Flavored Potato Crisps",
      price: "Rs.20",
      color: "#25A0FE", //blue
      qty: 1,
    },
    {
      id: "30",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/Stax%20Buffalo%20Wings%20with%20Ranch.png",
      title: "LAY'S® STAX® Buffalo Wings with Ranch Flavored Potato Crisps",
      price: "Rs.20",
      color: "#F6391C", //redorange
      qty: 1,
    },
    {
      id: "31",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20LKC%20Flamin%20Hot.png",
      title: "LAY'S® Kettle Cooked Flamin’ Hot",
      price: "Rs.20",
      color: "#B31E07", //red
      qty: 1,
    },
    {
      id: "32",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20LKC%20Original.png",
      title: "LAY'S® Kettle Cooked Original Potato Chips",
      price: "Rs.20",
      color: "#FEE254", //lightyellow
      qty: 1,
    },
    {
      id: "33",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20LKC%20Jalapeno.png",
      title: "LAY'S® Kettle Cooked Jalapeño Flavored Potato Chips",
      price: "Rs.20",
      color: "#389132", //green
      qty: 1,
    },

    {
      id: "34",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20LKC%20Mesquite%20BBQ.png",
      title: "LAY'S® Kettle Cooked Mesquite BBQ Flavored Potato Chips",
      price: "Rs.20",
      color: "brown",
      qty: 1,
    },
    {
      id: "35",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20LKC%20Sea%20Salt%20Vinegar.png",
      title: "LAY'S® Kettle Cooked Sea Salt & Vinegar Flavored Potato Chips",
      price: "Rs.20",
      color: "#25A0FE", //blue
      qty: 1,
    },
    {
      id: "36",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20LKC%20Sea%20Salt%20Cracked%20Pepper.png",
      title:
        "LAY'S® Kettle Cooked Sea Salt & Cracked Pepper Flavored Potato Chips",
      price: "Rs.20",
      color: "#666E65", //grey
      qty: 1,
    },
    {
      id: "37",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20LKC%20Maui%20Onion.png",
      title: "LAY'S® Kettle Cooked Maui Onion Flavored Potato Chips",
      price: "Rs.20",
      color: "#AC1B7C", //rose
      qty: 1,
    },
    {
      id: "38",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/Lays%20Poppables%20SS%20%26%20Vinegar.png",
      title: "LAY'S® Poppables™ Sea Salt & Vinegar",
      price: "Rs.20",
      color: "#1B8AAC", //blue
      qty: 1,
    },
    {
      id: "39",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/Lays%20Poppables%20White%20Cheddar.png",
      title: "LAY'S® Poppables™ White Cheddar Flavored Potato Snacks",
      price: "Rs.20",
      color: "#FA5C01", //orange
      qty: 1,
    },
    {
      id: "40",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/XL%20Poppables%20Sea%20Salt.png",
      title: "LAY'S® Poppables™ Sea Salt Potato Snacks",
      price: "Rs.20",
      color: "#01AFFA", //light blue
      qty: 1,
    },
    {
      id: "41",
      image:
        "https://lays.com/sites/lays.com/files/2021-07/Lays%20Poppables%20Honey%20BBQ.png",
      title: "LAY'S® Poppables™ Honey BBQ Flavored Potato Snacks",
      price: "Rs.20",
      color: "#FA0143", //pink
      qty: 1,
    },

    {
      id: "42",
      image:
        "https://lays.com/sites/lays.com/files/2022-03/23E0CD5A-AA82-46B5-8EFF-B507BF55B471_4.png",
      title: "LAY'S® Mix Variety Pack",
      price: "Rs.20",
      color: "#2E1476", //darkblue
      qty: 1,
    },
    {
      id: "43",
      image:
        "https://lays.com/sites/lays.com/files/2019-09/Wavy%20Original.png",
      title: "LAY'S® Wavy Original Potato Chips",
      price: "Rs.20",
      color: "#C32424", //red
      qty: 1,
    },
    {
      id: "44",
      image:
        "https://lays.com/sites/lays.com/files/2023-01/lays-fun-2%20%281%29%20%281%29%20%281%29.png",
      title: "LAY'S® Wavy Funyuns Onion Flavored Potato Chips",
      price: "Rs.20",
      color: "#E1AD01", //musturd yellow
      qty: 1,
    },
    {
      id: "45",
      image: "https://lays.com/sites/lays.com/files/2019-09/Wavy%20Ranch.png",
      title: "LAY'S® Wavy Ranch Flavored Potato Chips",
      price: "Rs.20",
      color: "#069368", //SWAN COLOR
      qty: 1,
    },
    {
      id: "46",
      image:
        "https://lays.com/sites/lays.com/files/2019-09/Wavy%20Hckory%20BBQ.png",
      title: "LAY'S® Wavy Hickory BBQ Flavored Potato Chips",
      price: "Rs.20",
      color: "brown",
      qty: 1,
    },
    {
      id: "47",
      image: "https://lays.com/sites/lays.com/files/2019-09/Wavy%20S%26P.png",
      title: "LAY'S® Wavy Salt & Pepper Flavored Potato Chips",
      price: "Rs.20",
      color: "silver",
      qty: 1,
    },
    {
      id: "48",
      image: "https://lays.com/sites/lays.com/files/2019-09/LS%20Wavy.png",
      title: "LAY'S® Wavy Lightly Salted Potato Chips",
      price: "Rs.20",
      color: "#BDD0FE", //lightest blue
      qty: 1,
    },
  ]);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const addORDelFromCart = (item, actionType) => {
    let itemExist = cartItems.findIndex((c) => c?.id === item?.id);

    if (itemExist > -1) {
      if (actionType === "+") {
        item.qty = item.qty + 1;
      } else {
        if (item.qty === 1) {
          removeCart(item);
        } else {
          item.qty = item.qty - 1;
        }
      }
      cartItems[itemExist] = item;
    } else {
      setCartItems([...cartItems, item]);
    }

    if (actionType === "+") {
      notification["success"]({
        message: "Item quantity increased successfully",
      });
    } else {
      notification["success"]({
        message: "Item quantity decreased successfully",
      });
    }
  };

  const removeCart = (item) => {
    let data = cartItems.filter((c) => c?.id !== item?.id);
    setCartItems(data);
    notification["success"]({
      message: "item remove from cart successfully",
    });
  };

  const ShowMore = (item) => {
    return (
      <Col span={8}>
        <Row justify={"center"}>
          <Card
            hoverable
            bodyStyle={{ border: 0, padding: 5, borderRadius: "5px" }}
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                width="100%"
                height="400px"
              ></img>

              <div
                style={{
                  backgroundColor: item.color,
                  width: "400px",
                  height: "190px",
                  padding: "30px",
                  fontFamily: "times new romen",
                  color: "white",
                }}
              >
                <h1 style={{ fontSize: "20px" }}>
                  <b>{item.title}</b>
                </h1>
                <Row justify={"space-between"}>
                  <p style={{ fontSize: "20px" }}>{item.price}</p>

                  <Button onClick={() => addORDelFromCart(item,"+")}   >
                    <ShoppingCartOutlined  style={{ fontSize: "27px" }} /> Add
                  </Button>
                </Row>
                <br />
              </div>
            </div>
          </Card>
        </Row>
      </Col>
    );
  };

  return (
    <div
     style={{backgroundImage:`url("https://i.pinimg.com/564x/62/a6/b0/62a6b02a77c84bfdaaed8637ed0fccb3.jpg")`}}
    
    >
      <Row style={{ padding: "20px" }} justify={"space-between"}>
        <Col>
          <h1
            style={{
              fontFamily: "serif",
              fontSize: "75px",
              color: "black",
              marginLeft: "50px",
            }}
          >
            Products
          </h1>
        </Col>

        <Col>
          <Row gutter={[16, 16]} >
            <Col>
              <Input style={{marginTop:"30px",borderColor:"black"}} onChange={(e) => setSearchText(e.target.value)} />
            </Col>
            <Col style={{marginTop:"30px"}} onClick={() => showDrawer()}>
              <Badge count={cartItems.length} showZero>
                <Avatar shape="square">
                  <ShoppingCartOutlined
                    style={{ fontSize: "28px", color: "black" }}
                  />
                </Avatar>
              </Badge>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <h1 style={{color:"black",fontSize:"25px",fontFamily:"times new romen",marginLeft:"70px"}}>{searchText}</h1>
      <Row gutter={[0, 50]}>
        {products
          .filter((i) =>
            i.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
          )
          .map((item) => ShowMore(item))}
      </Row>

      <Drawer
        width={400}
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
        title={"Cart items (" + cartItems.length + ")"}
      >
        <div>
          <List
            dataSource={cartItems}
            bordered
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} size={"large"} />}
                  title={
                    <a href="http://localhost:3000/Products">{item.title}</a>
                  }
                  description={item.price}
                  message={item.qty}
                />{" "}
                <Row>
                  <Col span={12}>
                    <Button onClick={() => removeCart(item)}>
                      <DeleteOutlined style={{ fontSize: "25px" }} /> Remove
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Row>
                      <Col span={8}>
                        <Button
                          style={{ width: "20px" }}
                          onClick={() => addORDelFromCart(item,"-")}
                        >
                          -
                        </Button>
                      </Col>
                      <Col span={8}>
                        <p style={{ width: "20px" }}>{item.qty} </p>
                      </Col>
                      <Col span={8}>
                        <Button
                          style={{ width: "20px" }}
                          onClick={() => addORDelFromCart(item,"+")}
                        >
                          +
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </div>
      </Drawer>
 

      <CommanFooter />
    </div>
  );
}
