<template>
  <div class="hello">
    <el-form :model="claimForm" :rules="rules" ref="claimForm">
      <el-form-item label="First Name" prop="name">
        <el-input placeholder="Enter First Name" v-model="claimForm.name"></el-input>
      </el-form-item>

      <el-form-item label="Last Name" prop="lastName">
        <el-input placeholder="Enter Last Name" v-model="claimForm.lastName"></el-input>
      </el-form-item>

      <el-form-item label="Email" prop="email">
        <el-input placeholder="Enter Email" v-model="claimForm.email"></el-input>
      </el-form-item>

      <el-form-item label="Subject" prop="subject">
        <el-input placeholder="Enter Subject" v-model="claimForm.subject"></el-input>
      </el-form-item>

      <el-form-item label="Text Area" prop="textArea">
        <el-input type="textarea" placeholder="Please input text fool" v-model="claimForm.textArea"></el-input>
      </el-form-item>

      <el-form-item label="Terms and Conditions" prop="terms">
        <el-checkbox v-model="claimForm.terms">Sell me your soul!</el-checkbox>
      </el-form-item>

      <el-row>
        <el-button type="primary" @click="submitForm('claimForm')">Submit</el-button>
      </el-row>

      <el-dialog title="Confirm Information" :visible.sync="dialogVisible" width="30%">
        {{claimForm.name}}
        <br>
        {{claimForm.lastName}}
        <br>
        {{claimForm.email}}
        <br>
        {{claimForm.subject}}
        <br>
        {{claimForm.textArea}}
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
    </el-form>
  </div>
</template>

<script src="./form.js"></script>
<style src="./form.css" scoped></style>
