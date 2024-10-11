import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import GoogleLogo from '../../assets/google_logo.png';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {signInValidationSchema} from '../../validationSchemas/signInValidation';

const SignIn = () => {
  const navigation = useNavigation();
  const handleSignIn = values => {
    console.log(values);
  };

  return (
   <ScrollView style={{backgroundColor: 'white'}}>
     <View style={styles.container}>
      <Text style={styles.signIn}>Sign in</Text>

      <View style={styles.inputContainer}>
        <Formik
          validationSchema={signInValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={handleSignIn}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <Input
                name={values.email}
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                error={touched.email && errors.email}
              />

              <Input
                name={values.password}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                error={touched.password && errors.password}
              />

              <Button
                onPress={() => {
                  handleSubmit();
                  handleReset();
                }}
                text="Continue"
                disabled={!isValid}
                containerStyle={{marginTop: 16}}
              />
            </>
          )}
        </Formik>
        <View style={styles.createOneContainer}>
          <Text style={{color: '#262626', fontWeight: '400'}}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.createOneText}>Create one</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.googleContainer}>
          <Image source={GoogleLogo} style={styles.googleLogo} />
          <View style={{flex: 1}}>
            <Text style={styles.googleText}>Continue With Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
   </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  signIn: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 127,
    paddingHorizontal: 27,
  },
  inputContainer: {
    marginTop: 32,
    paddingHorizontal: 23,
  },

  createOneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  createOneText: {
    color: '#262626',
    fontWeight: '600',
    marginLeft: 4,
  },
  googleContainer: {
    flexDirection: 'row',
    marginTop: 50,
    // justifyContent: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 50,
    padding: 12,
    

  },
  googleLogo: {
    width: 24,
    height: 24,
  },
  googleText: {
    color: '#262626',
    fontWeight: '500',
    textAlign: 'center',
  },
});
