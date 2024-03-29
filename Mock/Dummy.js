import moment from 'moment';
import uuid from 'react-native-uuid';

/**
 * Define and export the dummy data.
 */
export const SendMoneyRecords = [
    {
        id: uuid.v4(),
        img: require('../images/plus.png'),
    },
    {
        id: uuid.v4(),
        avatar: require('../images/avatar2.png'),
        name: 'Mike',
    },
    {
        id: uuid.v4(),
        avatar: require('../images/avatar3.png'),
        name: 'Joshpeh',
    },
    {
        id: uuid.v4(),
        avatar: require('../images/avatar4.png'),
        name: 'Ashley',
    },
    {
        id: uuid.v4(),
        avatar: require('../images/avatar4.png'),
        name: 'xxxxx',
    },
];

export const Services = [
    {
        id: uuid.v4(),
        img: require('../images/send_money.png'),
        name: 'Send Money',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/receive_money.png'),
        name: 'Receive Money',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/mobile_prepaid.png'),
        name: 'Mobile Prepaid',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/electricity_bill.png'),
        name: 'Electricity Bill',
    },

    {
        id: uuid.v4(),
        img: require('Assets/images/cashback_offer.png'),
        name: 'Cashback Offer',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/movie_tickets.png'),
        name: 'Movie Tickets',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/flight_tickets.png'),
        name: 'Flight Tickets',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/more_options.png'),
        name: 'More Options',
    },
];

const dummyData = { SendMoneyRecords, Services };

export default dummyData;



/*MomentJS is a JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way. 
This chapter will provide an overview of MomentJS and discusses its features in detail.*/
