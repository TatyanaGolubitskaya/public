import { Button, Modal } from 'antd';
import { memo, useEffect, useState } from 'react'
import { subscriptionType } from '../../store/blog/blogTypes';
import { getSubs } from '../../store/blog/blogActions';
import { useAppDispatch } from '../../hooks/hooksState';
import { userType } from '../../store/user/userTypes';

export const ProfileSubs = memo(({subs, profileUser}: {subs: subscriptionType[], profileUser: userType}) => {
    
    console.log("Render ProfileSubs")
    
    const dispatch = useAppDispatch();
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<subscriptionType>();
  
    const showModal = (sub: subscriptionType) => {
      setIsModalOpen(true);
      setModalContent(sub);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };

    useEffect(() => {
        dispatch(getSubs(profileUser.id!));
      }, [profileUser])

  return (
    <div className="subs">
    {subs.map((sub) => {
      return <>
        <Button key={sub.id} type="primary" onClick={() => showModal(sub)}>
          {sub.title}
        </Button>

      </>
    })}
    {modalContent && <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk}>
      <p>{modalContent.title}</p>
      <p>{modalContent.description}</p>
      <p>{modalContent.price}</p>
    </Modal>}

  </div>
  )
})
