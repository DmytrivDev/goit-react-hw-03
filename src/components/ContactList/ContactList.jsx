import Contact from "./Contact/Contact";

import css from "./ContactList.module.scss";

function ContactList({ visibleContacts, values, setContacts }) {
  const deleteContact = (id) => {
    const delatedContact = values.filter((contact) => contact.id !== id);

    setContacts(() => {
      return delatedContact;
    });
  };

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul className={css.contactsList}>
          {visibleContacts.map((contact) => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                onDelete={deleteContact}
              />
            );
          })}
        </ul>
      ) : (
        <div className={css.nothingFound}>Nothing found</div>
      )}
    </>
  );
}

export default ContactList;
