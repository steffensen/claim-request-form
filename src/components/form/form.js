export default {
  data() {
    return {
      dialogVisible: false,
      // Adding properties for input fields.
      claimForm: {
        name: '',
        lastName: '',
        email: '',
        subject: '',
        textArea: '',
        terms: ''
      },
      // Adding Rules for each input
      rules: {
        name: [{
          required: true,
          message: 'Please input First Name',
          trigger: 'blur'
        }],
        lastName: [{
          required: true,
          message: 'Please input Lsst Name',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: 'Please input Email',
          trigger: 'blur'
        }],
        subject: [{
          required: true,
          message: 'Please input Subject',
          trigger: 'blur'
        }],
        textArea: [{
          required: true,
          message: 'Please input some Text',
          trigger: 'blur'
        }],
        terms: [{
          required: true,
          message: 'Please Agree to my terms',
          trigger: 'change'
        }]
      }

    }
  },
  methods: {
    submitForm(claimForm) {
      this.$refs[claimForm].validate((valid) => {
        if (valid) {
          this.dialogVisible = true;
        } else {
          /* eslint-disable */
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}