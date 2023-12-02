import { Contact } from "../../pages/dashboard";
import React from "react";
import { CardContainer, CardHeader, CardParagraph, DeleteButton } from "./styles";

interface CardProps {
  contact: Contact;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  onDelete: () => Promise<void>;
}

export const Card: React.FC<CardProps> = ({ contact, onDelete }) => {
  const { name, email, phone, description, joined_at } = contact;
  const formattedDate = new Date(joined_at).toLocaleString();

  const handleDelete = async () => {
    try {
      await onDelete();
    } catch (error) {
      console.error("Erro ao deletar o contato:", error);
    }
  };

  return (
    <CardContainer>
      <CardHeader>{name}</CardHeader>
      <CardParagraph>E-mail: {email}</CardParagraph>
      <CardParagraph>Celular: {phone}</CardParagraph>
      <CardParagraph>Descrição: {description}</CardParagraph>
      <CardParagraph>Adicionado em: {formattedDate}</CardParagraph>
      <DeleteButton type="button" onClick={handleDelete}>
        Apagar contato
      </DeleteButton>
    </CardContainer>
  );
};

export default Card;