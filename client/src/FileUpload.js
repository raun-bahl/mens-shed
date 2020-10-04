 import React, {Fragment, useState, useEffect} from 'react';
 import axios from 'axios';
 import Card from './Card';
 import CardList from './CardList';

 const FileUpload = () => {

 	const [file, setFile] = useState('');
 	const [filename, setFileName] = useState('Choose File');
 	const [uploadedFile, setUploadedFile] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [newCard, setCard] = useState({});


  var date = new Date()
  var day = new Date().getDate()
  var month = date.getMonth()
  var year = new Date().getFullYear()


  var month_name = function(dt){
  var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return mlist[dt];
  };

  let str = ''
  var m_name = month_name(month)
  str += day + ' ' + m_name + ' ' + year

 	const onChange = e => {
 		setFile(e.target.files[0]);
 		setFileName(e.target.files[0].name);
 	};

 	const onSubmit =  async e => {
 		e.preventDefault();
 		const formData = new FormData();
 		formData.append('file', file);

 		try {
 			const res = await axios.post('http://localhost:5000/upload', formData, {
 				headers: {
 					'Content-Type': 'multipart/form-data',
 				}
 			});

 			const { fileName, filePath } = res.data;
 			console.log(filePath);
 			setUploadedFile({ fileName, filePath });

 		} catch(err) {
 			if (err.response.status == 500) {
 				console.log('Server problem');
 			} else {
 				console.log(err.response.data.msg);
 			}
 		}
 	};

  /* this should submit the card to App */
  const handleClick = () => {
    //setCard('0', '1', name, str, title, description, uploadedFile.filePath);
      return <Card 
      key = {0}
      id = {'1'}
      name = {name}
      date = {str}
      title = {title}
      description = {description}
      imgPath = {uploadedFile.filePath}
      />
    //return <CardList card = {newCard} />
  }
 	
 	return (
 		<Fragment>
 			<form onSubmit = {onSubmit}>
 				<div className="custom-file mb-4">
				  <input type="file" className="custom-file-input" id="customFile"  onChange = {onChange}/>
				  <label className="custom-file-label" htmlFor="customFile">{filename}</label>
				</div>

				<input type="submit" value = "Upload" className = "btn btn-primary btn-block mt-4" />
 			</form>
      {/* {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null} */} 

      <form className="pa4 black-80">
          <div className="measure">
            <label htmlFor="name" className="f6 b db mb2">Title  <span className="normal black-60">(required)</span></label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
            value = {name} onChange = {e => setName(e.target.value)} />
            <small id="name-desc" className="f6 black-60 db mb2">Add a title for your creation.</small>
          </div>
        </form>

        <form className="pa4 black-80">
          <div className="measure">
            <label htmlFor="name" className="f6 b db mb2">Title  <span className="normal black-60">(required)</span></label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
            value = {title} onChange = {e => setTitle(e.target.value)} />
            <small id="name-desc" className="f6 black-60 db mb2">Add a title for your creation.</small>
          </div>
        </form>


        <form className="pa4 black-80">
          <div className="measure">
            <label htmlFor="name" className="f6 b db mb2">Description  <span className="normal black-60">(optional)</span></label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
            value = {description} onChange = {e => setDescription(e.target.value)} />
            <small id="name-desc" className="f6 black-60 db mb2">Add an optional for your creation.</small>
          </div>
        </form>
      <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href =  "#" onClick = {handleClick}>Add Story</a>
      <Card 
        key = {0}
        id = {'1'}
        name = {name}
        date = {str}
        title = {title}
        description = {description}
        imgPath = {uploadedFile.filePath}
      />

 		</Fragment>

 	);
 };

 export default FileUpload;