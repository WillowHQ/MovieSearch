import React, { Component } from 'react'

import MyCards from './MyCards'
import { AppBar, IconButton , TextField} from 'material-ui'
import FileUpload from 'material-ui/svg-icons/file/file-upload'

import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const contents = [
[{"title":"Home Ing","description":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","image":"http://dummyimage.com/350x198.png/5fa2dd/ffffff","id":"f507a871-f321-42ba-adae-89c8704ade4f"},
{"title":"Greenlam","description":"Phasellus id sapien in sapien iaculis congue.","image":"http://dummyimage.com/350x198.png/ff4444/ffffff","id":"5589171e-0e05-4dfc-ab34-bef0a37e4455"},
{"title":"Ventosanzap","description":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","image":"http://dummyimage.com/350x198.png/ff4444/ffffff","id":"b04b72bd-7a76-4973-b65f-2ffb62919efd"},
{"title":"Greenlam","description":"Morbi porttitor lorem id ligula.","image":"http://dummyimage.com/350x198.png/cc0000/ffffff","id":"d4cc35a4-d0d3-4dd3-ba14-fe6df4c6d9f4"},
{"title":"Span","description":"Proin eu mi.","image":"http://dummyimage.com/350x198.png/dddddd/000000","id":"e9e5343a-fbd8-4c9e-9b39-9add70ce8d6f"},
{"title":"Solarbreeze","description":"Etiam faucibus cursus urna.","image":"http://dummyimage.com/350x198.png/ff4444/ffffff","id":"a9d9ebe0-9817-483f-a505-f1e852913027"},
{"title":"Tampflex","description":"Nulla ac enim.","image":"http://dummyimage.com/350x198.png/5fa2dd/ffffff","id":"1d3d3e1f-f067-467d-b75a-434be9646c25"},
{"title":"Pannier","description":"Duis bibendum.","image":"http://dummyimage.com/350x198.png/cc0000/ffffff","id":"6d5cde33-f8a2-40a2-9dba-d78c801cfdd9"},
{"title":"Stim","description":"Nullam sit amet turpis elementum ligula vehicula consequat.","image":"http://dummyimage.com/350x198.png/cc0000/ffffff","id":"0757848a-df11-4073-b3b9-3dd09127dc23"},
{"title":"Sonsing","description":"Phasellus in felis.","image":"http://dummyimage.com/350x198.png/cc0000/ffffff","id":"82777528-c9b7-40ca-bba2-a75cd184f9b7"},
{"title":"Y-Solowarm","description":"Donec ut dolor.","image":"http://dummyimage.com/350x198.png/ff4444/ffffff","id":"04cfd7d4-3529-4aea-8bbe-5f343c9e128a"},
{"title":"Span","description":"Morbi vel lectus in quam fringilla rhoncus.","image":"http://dummyimage.com/350x198.png/cc0000/ffffff","id":"0df85719-8cc6-4f7b-953e-118a88277d40"},
{"title":"Namfix","description":"Suspendisse potenti.","image":"http://dummyimage.com/350x198.png/5fa2dd/ffffff","id":"41ed2015-bf04-4eae-b259-7f1d5ffc784d"},
{"title":"Cardguard","description":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","image":"http://dummyimage.com/350x198.png/dddddd/000000","id":"34319876-f4a4-4270-953e-e61fa3025b77"},
{"title":"Transcof","description":"Donec semper sapien a libero.","image":"http://dummyimage.com/350x198.png/cc0000/ffffff","id":"97d93f7e-d493-4402-aa7a-511a6be97b4d"},
{"title":"Trippledex","description":"Morbi non quam nec dui luctus rutrum.","image":"http://dummyimage.com/350x198.png/dddddd/000000","id":"0bb426de-77b2-4227-8673-3154d6db7e24"},
{"title":"Alpha","description":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","image":"http://dummyimage.com/350x198.png/5fa2dd/ffffff","id":"a689ad2e-e652-4884-a407-9ce016035918"},
{"title":"Treeflex","description":"Proin risus.","image":"http://dummyimage.com/350x198.png/5fa2dd/ffffff","id":"0c92f34e-6c8b-45ab-a8be-1acfeed4195c"},
{"title":"Otcom","description":"Etiam justo.","image":"http://dummyimage.com/350x198.png/dddddd/000000","id":"a68594c4-b4e3-4bc3-86f3-9a418428cfc4"},
{"title":"Tempsoft","description":"Cras pellentesque volutpat dui.","image":"http://dummyimage.com/350x198.png/ff4444/ffffff","id":"33373f73-f0ad-44e5-a38e-c85b414b131a"}]
]


class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      contents: contents[0], 
      searchTerm: '', 
      openUploadPanel: false
    
    }
  }
  handleSearchUpdateInput = (e) => {
    this.setState({
      searchTerm: e.target.value,
    })
  }
  handleUploadCLick = () => {
   console.log("this is being called")
    this.setState({
      openUploadPanel:  ! this.state.openUploadPanel
    })
  }
  render() {
  
    return (
      <div className="App">
        <div>
          <AppBar
            iconElementLeft={
              <div className='SearchBar'>
                <TextField
                  type='text'
                  value={this.state.searchTerm}
                  hintText="Search"
                  onChange={this.handleSearchUpdateInput}
                />
              </div>
            }
               
            iconElementRight={
              <IconButton onTouchTap={this.handleUploadCLick}>
                <FileUpload/>
              </IconButton>
            }
           

          />
        </div>
        {this.state.openUploadPanel ?
        <div className="uploadPanel">
          <p> this works </p>
        </div>
        : 
        <div> 
            <p> state is false now </p>
        </div>
        
        }
       
        
        <div className="App-table">
          <MyCards
            sources={contents[0]}
            searchTerm={this.state.searchTerm}
          /> 
        </div>
      </div>
    );
  }
}

export default App;
