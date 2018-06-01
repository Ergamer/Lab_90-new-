import React, {Component, Fragment} from 'react';
import OneOrderView from "../../components/OneOrderView/OneOrderView";
import {connect} from "react-redux";



class Orders extends Component {

    render () {
        return (
            <div className="Orders">
                <p>Orders</p>
                {this.props.orders.map(order => {
                  return (
                      <OneOrderView
                          id={order._id}
                          title={order.title}
                          place={order.title}
                          willWatchDate={order.willWatchDate}
                          user={order.user.username}/>
                  )
                  }
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        admin: state.admin.admin
    }
};


export default connect(mapStateToProps)(Orders);
