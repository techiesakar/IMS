import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 0.3rem;
  padding: 0
    ${(props) =>
      props.size === "xs"
        ? "0.6rem"
        : props.size === "sm"
        ? "1.1rem"
        : props.size === "md"
        ? "1.4rem"
        : props.size === "lg"
        ? "1.6rem"
        : "1.1rem"};

  height: ${(props) =>
    props.size === "xs"
      ? "28px"
      : props.size === "sm"
      ? "34px"
      : props.size === "md"
      ? "37px"
      : props.size === "lg"
      ? "40px"
      : "34px"};

  font-size: ${(props) =>
    props.size === "xs"
      ? "12px"
      : props.size === "sm"
      ? "14px"
      : props.size === "md"
      ? "16px"
      : props.size === "lg"
      ? "20px"
      : "34px"};

  font-weight: 600;

  background-color: ${(props) =>
    props.variant === "contained"
      ? props.color === "light"
        ? "#f8f9fa"
        : props.color === "dark"
        ? "#212529"
        : props.color === "primary"
        ? "#0d6efd"
        : props.color === "secondary"
        ? "#6c757d"
        : props.color === "success"
        ? "#198754"
        : props.color === "info"
        ? "#0dcaf0"
        : props.color === "warning"
        ? "#ffc107"
        : props.color === "danger"
        ? "#dc3545"
        : "#f8f9fa"
      : "transparent"};
  width: fit-content;
  color: ${(props) =>
    props.variant === "outlined" || props.variant === "text"
      ? props.color === "light"
        ? "#f8f9fa"
        : props.color === "dark"
        ? "#212529"
        : props.color === "primary"
        ? "#0d6efd"
        : props.color === "secondary"
        ? "#6c757d"
        : props.color === "success"
        ? "#198754"
        : props.color === "info"
        ? "#0dcaf0"
        : props.color === "warning"
        ? "#ffc107"
        : props.color === "danger"
        ? "#dc3545"
        : "#f8f9fa"
      : "#fff"};

  border: 1px solid
    ${(props) =>
      props.variant === "outlined"
        ? props.color === "light"
          ? "#f8f9fa"
          : props.color === "dark"
          ? "#212529"
          : props.color === "primary"
          ? "#0d6efd"
          : props.color === "secondary"
          ? "#6c757d"
          : props.color === "success"
          ? "#198754"
          : props.color === "info"
          ? "#0dcaf0"
          : props.color === "warning"
          ? "#ffc107"
          : props.color === "danger"
          ? "#dc3545"
          : "#f8f9fa"
        : "transparent"};
`;

const AnchorComponent = ButtonComponent.withComponent("a");

const Button = ({
  type,
  color,
  variant,
  className,
  id,
  onClick,
  children,
  size,
  href,
}) => {
  if (href) {
    return (
      <AnchorComponent
        href={href}
        className={className ? `button ${className}` : `button`}
        id={id}
        onClick={onClick}
        variant={variant}
        size={size}
        color={color}
      >
        {children}
      </AnchorComponent>
    );
  }

  return (
    <ButtonComponent
      type={type ? type : "button"}
      color={color}
      className={className ? `button ${className}` : `button`}
      id={id}
      onClick={onClick}
      variant={variant}
      size={size}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
