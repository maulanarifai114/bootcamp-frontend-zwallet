// Auth
import MainAuth from '../views/auth/main/MainAuth.vue'
import Login from '../views/auth/login/Login.vue'
import SignUp from '../views/auth/signup/SignUp.vue'
import Forgot from '../views/auth/forgotpass/ForgotPass.vue'
import CreateNewPass from '../views/auth/forgotpass/CreateNewPass.vue'
import CreatePin from '../views/auth/signup/CreatePin.vue'
import CreatePinSuccess from '../views/auth/signup/CreatePinSuccess.vue'

export default {
  path: '/auth',
  name: 'MainAuth',
  component: MainAuth,
  redirect: '/auth/login',
  children: [
    {
      path: 'login',
      name: 'Login',
      component: Login,
      meta: { requiresVisitor: true }
    },
    {
      path: 'signup',
      name: 'SignUp',
      component: SignUp,
      meta: { requiresVisitor: true }
    },
    {
      path: 'forgot',
      name: 'Forgot',
      component: Forgot,
      meta: { requiresVisitor: true }
    },
    {
      path: 'createnewpass/:token',
      name: 'CreateNewPass',
      component: CreateNewPass,
      meta: { requiresVisitor: true }
    },
    {
      path: 'createpin/:token',
      name: 'CreatePin',
      component: CreatePin,
      meta: { requiresVisitor: true }
    },
    {
      path: 'createpinsuccess',
      name: 'CreatePinSuccess',
      component: CreatePinSuccess,
      meta: { requiresVisitor: true }
    }
  ]
}
