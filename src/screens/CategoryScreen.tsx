
import { FlatList, Text, View } from 'native-base';
import React, { Component } from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { globalStyle, primaryColor, textColor } from '../utils/GlobalStyle';
import { AppSpinner } from './spinner';
import { windowWidth } from '../utils/Dimentions';
import CategoryModal from '../components/CategoryModal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { newGuidd } from '../utils/HelperFunctions';
import Loading from '../components/loading';
type CompProps = {
    //   props here
    categories:any
    addCategory:(payload:any)=>void,
    updateCategory:(payload:any)=>void,
    deleteCategory:(docId:any)=>void,
    // updateCategory,
};
type CompState = {
    errMsg:string,
    data:any,
    isUpdate:boolean,
    isLoading:boolean,
    payload:any,
    modalVisible:boolean
};
let initialState = {
    id:newGuidd(),
    title: '',
    description: '',
    docId:''
  };


export default class CategoryScreen extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props);
        this.state={
            errMsg:'',
            data:this.props.categories,
            isUpdate:false,
            isLoading:false,
            payload:initialState,
            modalVisible:false
        }

    }
    render() {

        const handleSearch = (text:any) => {
            this.setState((prevState) => ({
                ...prevState,
                data:this.props.categories.filter(
                        (item:any) => item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1,
                      ),
            }))
          };
        
          const handleChange = (key:any, value:any) => {
            this.setState((prevState) => ({
                ...prevState,
                payload:{...prevState.payload, [key]: value},
            }))
          };
        
          const handleModalVisibility = (flag:any) => {
            this.setState((prevState) => ({
                ...prevState,
                payload:initialState,
                modalVisible:flag
            }))
          };
        
          const handleSubmit = async () => {
            this.setState((prevState) => ({
                ...prevState,
                isLoading:true,
                modalVisible:false
            }))
        
            if (this.state.payload.title.trim() === '') {
            this.setState((prevState) => ({
                ...prevState,
                isLoading:false,
                errMsg:'Fill the title.'
            }))
              return;
            }
        
            let isSuccessful:any;
            if (this.state.isUpdate) {
                isSuccessful = await this.props.updateCategory(this.state.payload);
                this.setState((prevState) => ({
                  ...prevState,
                  isUpdate:false,
                }))        
    
            } else {
                isSuccessful = await this.props.addCategory(this.state.payload);
            }
        

            if (isSuccessful === true) {
            this.setState((prevState) => ({
              ...prevState,
              payload:initialState,
            }))        

            } else {
            //   setErrMsg('Problem occured. Please try again later.');
            }
            this.setState((prevState) => ({
              ...prevState,
              isLoading:false,
            }))        

          };
        
          const handleDelete = async (id:any) => {
            this.setState((prevState) => ({
              ...prevState,
              isLoading:true,
            }))      
            const isDeleted:any = await this.props.deleteCategory(id);
            if (isDeleted === false) {
              Alert.alert(
                'Error!',
                'Problem deleting category. Please try again later.',
                [
                  {
                    text: 'Ok',
                  },
                ],
                {cancelable: true},
              );
            }
            this.setState((prevState) => ({
              ...prevState,
              isLoading:false,
            }))      

          };
        
          const handleUpdate = (item:any) => {
            this.setState((prevState) => ({
                ...prevState,
                isUpdate: true,
                payload:{...item,id:newGuidd()},
                modalVisible:true
            }))  
          };
        
          const handleAdd = () => {
            this.setState((prevState) => ({
                ...prevState,
                isUpdate: false,
                payload: {...initialState,id:newGuidd()},
                modalVisible:true
            }))           
          };
        
        const renderItem = ({item}:any) => (
            <View style={styles.card}>
              <View
                style={{
                  flex: 3,
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={[styles.color, {backgroundColor: item.color}]} />
                <Text style={{color: textColor, fontSize: 15}}>{item.title}</Text>
              </View>
              <View style={styles.iconsContainer}>
                <Icon
                  size={25}
                  color="#0096FF"
                  name="square-edit-outline"
                  onPress={() => handleUpdate(item)}
                />
                <Icon
                  size={25}
                  color="#D11A2A"
                  name="delete"
                  onPress={() => handleDelete(item.docId)}
                />
              </View>
            </View>
          );
        return (
            <>
            {this.state.isLoading ? (
             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
             <Loading />
           </View>
            ) : (
              <>
                {this.state.modalVisible ? (
                  <CategoryModal
                    payload={this.state.payload}
                    isUpdate={this.state.isUpdate}
                    handleSave={handleSubmit}
                    handleChange={handleChange}
                    handleModalVisibility={handleModalVisibility}
                  />
                ) : (
                  <View>
                    <View style={styles.header}>
                      <TextInput
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="grey"
                        onChangeText={text => handleSearch(text)}
                      />
                      <Button
                        color={primaryColor}
                        mode="contained"
                        style={{alignSelf: 'center'}}
                        onPress={handleAdd}>
                        Add
                      </Button>
                    </View>
                    {this.state.errMsg.trim().length !== 0 && (
                      <Text style={globalStyle.error} 
                    //   onPress={() => setErrMsg('')}
                      >
                        {this.state.errMsg}
                      </Text>
                    )}
                    <FlatList
                      style={{marginTop: 5}}
                      data={this.state.data}
                      keyExtractor={(item:any) => item.id}
                      renderItem={renderItem}
                    />
                  </View>
                )}
              </>
            )}
          </>
        );
    }
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      marginTop: 10,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
    },
    input: {
      color: textColor,
      borderBottomWidth: 1,
      width: windowWidth / 1.4,
      borderBottomColor: '#D3D3D3',
      fontSize: 17,
    },
    card: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      marginTop: 10,
      marginHorizontal: 10,
    },
    color: {
      marginRight: 10,
      width: 15,
      height: 15,
      borderRadius: 15 / 2,
    },
    iconsContainer: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });