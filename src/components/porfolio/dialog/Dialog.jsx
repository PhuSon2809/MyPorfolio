import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, Row, Col } from "reactstrap";
import "./dialog.scss";

Dialog.propTypes = {
  modal: PropTypes.bool,
  toggle: PropTypes.func,
  portfolio: PropTypes.object,
};

function Dialog({ modal, toggle, portfolio }) {
  return (
    <>
      {modal && (
        <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered">
          <ModalBody>
            <Row>
              <Col md="7" className="order-last order-md-first mt-3 mt-md-0">
                <div className="dialog-left">
                  <img
                    src={portfolio.image}
                    alt="porfolio"
                  />
                </div>
              </Col>
              <Col md="5" className="order-first pl-md-0">
                <i className="ri-close-line close" onClick={toggle} />
                <div className="dialog-right ">
                  <h2>{portfolio.title}</h2>
                  <ul>
                    <li>
                      <div className="time">
                        <div>
                          <span>Semester: </span> {portfolio.semester}
                        </div>

                        <span className="marg">{portfolio.time}</span>
                      </div>
                    </li>
                    <li>
                      <span>Description:</span> {portfolio.description}
                    </li>
                    <li>
                      <span>Technology:</span> {portfolio.tech}
                    </li>
                    <li>
                      <span>Team size:</span> {portfolio.teamSize}
                    </li>
                    {portfolio.position ? (
                      <li>
                        <span>Position:</span> {portfolio.position}
                      </li>
                    ) : (
                      <></>
                    )}
                  </ul>
                  <div className="button">
                    <a className="btn" href={portfolio.git}>
                      <span>
                        <i className="ri-github-fill"></i> GitHub
                      </span>
                    </a>
                    <a className="btn ml-3" href={portfolio.web}>
                      <span>
                        <i className="fa fa-globe"></i> Website
                      </span>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      )}
    </>
  );
}

export default Dialog;
