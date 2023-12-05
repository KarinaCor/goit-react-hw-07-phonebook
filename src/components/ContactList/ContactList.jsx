import { useDispatch, useSelector } from 'react-redux';
import * as SC from '../ContactList/ContactList.styled';


import { selectContactsFilter, selectContactsList, selectIsLoading } from 'redux/selectors';
import { deleteContact} from 'redux/contactOperation/contactsOperation';




const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);

// useEffect(() => {
//   dispatch(fetchContacts())
// },[dispatch])

  const getFilteredContact = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
console.log (contacts)
  return (
    
  

    <SC.List>
    {!isLoading && getFilteredContact?.map(({ id, name, phone }) => (
      <SC.Item key={id}>
        {name}: {phone}
        
        <SC.Button onClick={() => dispatch(deleteContact(id))}> 
          Delete
        </SC.Button> 
      </SC.Item>
    ))}
  </SC.List>
  );
};

export default ContactList;
