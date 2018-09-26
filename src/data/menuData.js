import React , { Component} from 'react';
import DropDown from "./../components/DropDown";

class menuData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropDown: [
        {
          id:0,
            title: 'Landing',
          selected: false,
          key: 'dropDown'
        },
        {
          id: 1,
          title: 'Library',
          slected: false,
          key: 'dropDown'
        }
      ]
    }
  }
  render() {
    return (
      <section>
        <div>
          <DropDown/>
        </div>
      </section>
    )
  }
}

export default menuData;
