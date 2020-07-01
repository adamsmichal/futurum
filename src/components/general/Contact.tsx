import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import axios from "axios";

const ContactWrapper = styled.section`
  min-height: calc(100vh - 100px);
  padding: ${({ theme }) => theme.space.l};
  color: ${({ theme }) => theme.colors.greeyH};
  font-family: ${({ theme }) => theme.fontFamily.main};
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    font-size: 2rem;
    margin-bottom: ${({ theme }) => theme.space.xl};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    font-size: 2.3rem;
    margin-bottom: ${({ theme }) => theme.space.xxl};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    padding: ${({ theme }) => theme.space.xxl};
    margin-bottom: 0;
    font-size: 2.6rem;
    line-height: 40px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    min-height: calc(100vh - 132px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.7fr 1.3fr;
    gap: 1px ${({ theme }) => theme.space.xxl};
    grid-template-areas: "form contact" "form details";
    padding-top: 0;
    margin-bottom: 0;

    & .contact {
      grid-area: contact;
    }

    & .form {
      grid-area: form;
    }

    & .detalis {
      grid-area: detalis;
    }
  }
`;

const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.space.m};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    font-size: 3rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tabletLarge}) {
    margin-bottom: ${({ theme }) => theme.space.l};
    font-size: 3.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface IContactInputProps {
  big?: boolean;
}

const ContactInput = styled.input<IContactInputProps>`
  width: 100%;
  height: ${props => (props.big ? "125px" : "40px")};
  padding: ${({ theme }) => theme.space.s};
  margin-bottom: ${({ theme }) => theme.space.xs};
  border: 1px solid ${({ theme }) => theme.colors.greeyB};
  background: none;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    height: ${props => (props.big ? "150px" : "65px")};
    margin-bottom: ${({ theme }) => theme.space.sm};
    padding: ${({ theme }) => theme.space.m};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    height: ${props => (props.big ? "250px" : "65px")};
  }
`;

const ContactBtn = styled.button`
  display: block;
  width: 30%;
  height: 30px;
  margin-left: auto;
  border: 1px solid ${({ theme }) => theme.colors.greeyB};
  background: none;

  & :hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.greeyB};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    height: 50px;
  }
`;

const Logo = styled.h2`
  margin: ${({ theme }) => theme.space.l} 0 ${({ theme }) => theme.space.ml};
  font-size: 3rem;
`;

const ComapnyInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 85px;
`;

const Contact: React.FC = () => {
  return (
    <ContactWrapper>
      <div className="contact">
        <Title>Kontakt</Title>
        <ContactInfo>
          <a href="tel:53015681">Tel. 530175681</a>
          <p>|</p>
          <a href="mailto: biuro@domyfuturum.pl">biuro@domyfuturum.pl</a>
        </ContactInfo>
      </div>
      <div className="form">
        <Title>Napisz do nas</Title>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(values, { setSubmitting }) => {
            axios
              .post(
                "https://us-central1-gatsby-warsztaty.cloudfunctions.net/sendEmail",
                values
              )
              .then(res => {
                console.log(res);
                setSubmitting(false);
              })
              .catch(err => {
                console.log(err);
                setSubmitting(false);
              });
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <ContactInput
                id="name"
                type="text"
                name="name"
                placeholder="Imię"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <ContactInput
                id="email"
                type="e-mail"
                name="email"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ContactInput
                big
                id="message"
                as="textarea"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <ContactBtn disabled={isSubmitting}>Wyślij</ContactBtn>
            </form>
          )}
        </Formik>
      </div>
      <div className="details">
        <Logo>Futurum</Logo>
        <ComapnyInfo>
          <p>Futurum Małgorzata Grynczel</p>
          <p>NIP: 9660534770</p>
          <p>
            ul. Radosna 33 <br />
            16-002 Nowe Aleksandrowo
          </p>
        </ComapnyInfo>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
