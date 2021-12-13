<template>
  <div class="view-account">
    <div class="view-account-header"></div>
    <div class="view-account-container">
      <div class="view-account-top">
        <div class="view-account-top-logo">
          <img src="~@/assets/images/account-logo.png" alt=""/>
        </div>
        <div class="view-account-top-desc">Naive Ui Admin中台前端/设计解决方案</div>
      </div>
      <div class="view-account-form">
        <Form>
          <FormItem>
            <a-input v-model:value="formState.username">
              <template #prefix>
                <UserOutlined style="color: rgba(0, 0, 0, 0.25)"/>
              </template>
            </a-input>
          </FormItem>

          <FormItem>
            <a-input v-model:value="formState.password" type="password">
              <template #prefix>
                <LockOutlined style="color: rgba(0, 0, 0, 0.25)"/>
              </template>
            </a-input>
          </FormItem>

          <FormItem>
            <a-button
                class="w-full"
                type="primary"
                html-type="submit"
                :disabled="formState.username === '' || formState.password === ''"
                @click="login"
            >
              Log in
            </a-button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';
import {Form, Input as AInput, Button as AButton} from 'ant-design-vue'
import {useRouter} from 'vue-router'

interface FormState {
  username: string;
  password: string;
}

const FormItem = Form.Item
const formState: FormState = reactive({
  username: 'admin',
  password: '123456'
})

const router = useRouter()

const login = () => {
  router.push({path: '/home/index'})
}


</script>

<style lang="less" scoped>
.view-account {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background-color: dimgray;

  &-container {
    flex: 1;
    padding: 32px 0;
    width: 384px;
    margin: 0 auto;
  }

  &-top {
    padding: 32px 0;
    text-align: center;

    &-desc {
      font-size: 14px;
      color: #808695;
    }
  }

  &-other {
    width: 100%;
  }

  .default-color {
    color: #515a6e;

    .ant-checkbox-wrapper {
      color: #515a6e;
    }
  }
}

@media (min-width: 768px) {
  .view-account {
    background-image: url('../../assets/images/login.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
  }

  .page-account-container {
    padding: 32px 0 24px 0;
  }
}
</style>
