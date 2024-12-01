import { StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export const AppSpinner = () => {
    return (
    <Spinner
          visible={true}
          textContent={'Loading display...'}
          textStyle={styles.spinnerTextStyle}
        />   
    )
  };
  const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#FFF'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    }
  });