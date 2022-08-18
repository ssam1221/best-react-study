import {
    uiActions
} from './ui-slice';

const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: `pending`,
            title: `Sending...`,
            message: `Sending cart data`
        }));

        const sendRequest = async () => {
            const response = await fetch(`url`, {
                method: `PUT`,
                body: JSON.stringify(cart)
            });
        }
        try {
            await sendRequest();
        } catch (err) {

            dispatch(uiActions.showNotification({
                status: `error`,
                title: `Error...`,
                message: `Error`
            }));

        }
    }
}

export { sendCartData };