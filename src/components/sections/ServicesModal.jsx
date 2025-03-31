import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import TabComponent from "../sectionElements/TabComponent";
import PropTypes from "prop-types";
// import CardModal from "../sectionElements/CardModal";
import ModalComponent from "../interactives/ModalComponent";
import services from "../../content/services";
import ServiceDetailCard from "../cards/ServiceDetailCard";
import content from "../../content/content";
import AcordionModalServices from "../interactives/AcordionModalServices";
import Button from "../interactives/Button";

const ServicesModal = () => {
  const [visible, setVisible] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const tabs = [];

  return (
    <div>
      <Button
        size="small"
        removeAnchor={true}
        removeTarget={true}
        tagName="div"
        label="Ver todas"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        }
        onClick={() => setVisible(true)}
        className="bg-black text-secondary "
      />

      <Dialog
        header="Áreas de atuação"
        headerStyle={{ paddingBottom: "3px" }}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "384px", "426px": "90vw" }}
        contentStyle={{ padding: "1rem", paddingLeft: "", paddingRight: "" }}
      >
        <div className="flex flex-col w-full gap-[12px]">
          <div>
            <p className="text-paragraph4 font-secondFont">
              Selecione a área que deseja saber mais sobre:
            </p>
          </div>
          <div className="flex justify-center w-full">
            {/* <TabComponent tabs={tabs} /> */}
            <AcordionModalServices />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

ServicesModal.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default ServicesModal;
