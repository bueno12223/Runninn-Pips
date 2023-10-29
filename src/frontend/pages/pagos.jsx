import React, { useState } from "react";
import Table from "../components/cart/table";
import Plans from "../components/layout/plans";
import { useSelector, connect } from "react-redux";
import { validatePayment } from "../actions/transacction";
import DisplayMesage from "../components/global/displayMessage";
import PayButon from "../components/checkout/PayButon";
import "./styles/pagos.scss";
import buttonYappy from "../assets/images/layout/yappy.png";

function pagos({ validatePayment }) {
    const prices = ["300", "1500", "3000"];
    const [totalCharges, setTotal] = useState("0.00");
    const user = useSelector((state) => state.user) || {};
    const planPrices = useSelector((state) => state.planPrices) || prices;
    const isLogged = user && user._id;

    const paymentCallback = async () => {
        if (totalCharges !== "0.00") {
            const yappyURL = await validatePayment(totalCharges);
            if (yappyURL.data.url) {
                window.open(yappyURL.data.url, "_blank");
            }
        }
    };

    return (
        <>
            <h1 className="title">
                {isLogged
                    ? "Parece que tu cuenta aún no esta activa"
                    : "Estos son todos los métodos de pago que usamos"}
            </h1>
            <p className="text mb">
                {isLogged
                    ? "Para poder volver a accerder a la plataforma nesecitarás renovar tu cuenta, primero selecciona tu plan preferido y luego selecciona el método de pago que mas te convenga"
                    : "Antes de hacer algún pago, registarte"}
            </p>
            <Plans onClick={setTotal} to="/pagos" prices={planPrices} />
            <section className="pagos-container mt">
                <Table totalCharges={totalCharges} />
                <img
                    onClick={() => paymentCallback()}
                    style={{
                        height: "75px",
                        width: "180px",
                        cursor: "pointer",
                        transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                    }
                    src={buttonYappy}
                    alt="pay-with-yappy"
                />
                {/* <PayButon paymentCallback={paymentCallback} amount={totalCharges} isLogged={isLogged} /> */}
                {/* <DisplayMesage /> */}
            </section>
        </>
    );
}
const mapDispatchToProps = {
    validatePayment,
};
export default connect(null, mapDispatchToProps)(pagos);
