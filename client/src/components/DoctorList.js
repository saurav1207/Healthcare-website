import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DoctorList.css";
import { Avatar, Button, Modal } from "antd";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="col-md-3">
        <div
          className="card m-2"
          style={{
            cursor: "pointer",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
          }}
          onClick={showModal}
        >
          <div className="card-header d-flex flex-column align-items-center">
            {/* <Avatar src={doctor.avatar} className="mb-2" size={64} /> */}
            <Avatar src={"https://www.w3schools.com/howto/img_avatar.png"} className="mb-2" size={64} />
            <div className="text-center">
              <h4 className="mb-0 text-truncate">
                Dr. {doctor.firstName} {doctor.lastName}
              </h4>
              <p className="mb-0 text-muted">{doctor.specialization}</p>
            </div>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center">
              <div>
                <p className="mb-1 text-muted">
                  <b>Experience:</b> {doctor.experience}
                </p>
                <p className="mb-1 text-muted">
                  <b>Timings:</b> {doctor.timings[0]} - {doctor.timings[1]}
                </p>
                <p className="mb-3 text-muted">
                  <b>Fees Per Consultation:</b> {doctor.feesPerCunsaltation}/-
                </p>
              </div>
              <div className="d-flex justify-content-start align-center">
                <Button type="primary" onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}>
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Modal
          title={`Dr. ${doctor.firstName} ${doctor.lastName}`}
          visible={modalVisible}
          onCancel={hideModal}
          footer={null}
          centered
          className="custom-modal"
        >
          <div className="modal-content">
            <div className="modal-avatar">
              <Avatar src={"https://www.w3schools.com/howto/img_avatar.png"} size={120} />
            </div>
            <div className="modal-details">
              <p className="modal-specialization">
                <b>Specialization:</b> {doctor.specialization}
              </p>
              <div className="modal-about">
                <h4>About the Doctor:</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum lobortis efficitur. Proin non varius
                  metus, at feugiat nisi. Sed sit amet ex nibh. Quisque euismod sollicitudin nisl, non tempus lectus vestibulum
                  sed. Sed vulputate cursus magna vel ultrices.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum lobortis efficitur. Proin non varius
                  metus, at feugiat nisi. Sed sit amet ex nibh. Quisque euismod sollicitudin nisl, non tempus lectus vestibulum
                  sed. Sed vulputate cursus magna vel ultrices.
                </p>
              </div>
            </div>
          </div>
        </Modal>

      </div>
    </>
  );
};

export default DoctorList;

