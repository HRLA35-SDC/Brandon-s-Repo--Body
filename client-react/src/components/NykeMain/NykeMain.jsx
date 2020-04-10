import React,{ useState } from 'react'
import Headline from '../sidebar/Headline.jsx'
import MainPictureModal from '../modals/MainPictureModal.jsx'


const NykeMain = ({currentShoe}) => {
  console.log(currentShoe, "CURRENT SHOE")
  //toggle modal for pictures
  const [modal, setModal] = useState(false)
  //pass function down to toggle modal
  const removeModal = () => { setModal(false)}

  return(
    <div id='nyke_main_nl'>
      <div id='nyke_product_display'>
        {currentShoe.productPictures.map((picSrc, index) => {
        if(picSrc.includes('.jpg')){
          return (
            <div className='lg_pic_nl' onClick={() => setModal(!modal)} key={index}>
              <img src={picSrc} key={index} alt={currentShoe.name} id="modal_pic_nl"/>
            </div>
          )
        }
        else if(picSrc.includes('.webm')){
          return (
            <div className='lg_pic_nl' onClick={() => setModal(!modal)} key={index}>
              <video src={picSrc} autoPlay alt={currentShoe.name} loop key={index} id="modal_pic_nl"/>
            </div>
            )
          }
        })}
      </div>
      {modal && <MainPictureModal removeModal={removeModal} currentShoe={currentShoe}/>}
    </div>
  )
}

export default NykeMain