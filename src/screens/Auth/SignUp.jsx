import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../common/Button';
import Input from '../../common/Input';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../common/BackButton';
import {Formik} from 'formik';
import {signUpValidationSchema} from '../../validationSchemas/signUpValidation';

const SignUp = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignUp = values => {
    console.log(values);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{marginTop: 63, paddingHorizontal: 27}}>
          <BackButton onPress={handleBack} />
          <Text style={styles.title}>Create Account</Text>
        </View>
        <View style={styles.inputContainer}>
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values, {resetForm} ) => {
              handleSignUp(values);
              resetForm();
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <Input
                  placeholder="Full Name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  error={touched.name && errors.name}
                  name={values.name}
                />

                <Input
                  placeholder="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  error={touched.email && errors.email}
                />

                <Input
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={touched.password && errors.password}
                  secureTextEntry
                />

                <Input
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                  secureTextEntry
                />

                <Button
                  onPress={handleSubmit}
                  text="Continue"
                  disabled={!isValid}
                  containerStyle={{marginTop: 12,marginBottom: 20}}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 32,
    paddingHorizontal: 22,
  },
});
