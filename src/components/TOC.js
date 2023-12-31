import { Component } from 'react';

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
      console.log('===> TOC render shouldComponentUpdate', newProps, this.props);

      if(this.props.data === newProps.data){
        return false;
      }
      return true;
    }
    render(){
      console.log('TOC Rendering');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}>
          <a 
          data-id={data[i].id}
          onClick={function(id, e){
            e.preventDefault();
            this.props.onChangePage(id + 1);
          }.bind(this, i)} href={"/content/" + data[i].id}>{data[i].title}</a></li>)
        i = i + 1;
      }
      return(
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
}

export default TOC;
