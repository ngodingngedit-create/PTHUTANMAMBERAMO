<template>
  <div class="profile-page">
    <div class="profile-header-bg"></div>
    <div class="container profile-container">
      <div class="profile-card">
        
        <div class="profile-user-header">
          <div class="avatar-wrapper">
            <div class="avatar">{{ initials }}</div>
          </div>
          <div class="profile-titles">
            <h2>{{ userName }}</h2>
            <p>{{ userEmail }}</p>
          </div>
          <button class="logout-btn" @click="handleLogout">Sign Out</button>
        </div>

        <div class="profile-content">
          <div class="info-section">
            <div class="section-top">
              <h3>Personal Information</h3>
              <button class="edit-btn" @click="toggleEdit">
                {{ isEditing ? 'Save Profile' : 'Edit Profile' }}
              </button>
            </div>
            <div class="info-grid">
              <div class="info-item">
                <span class="label">Full Name</span>
                <input v-if="isEditing" type="text" v-model="editName" class="edit-input" />
                <span v-else class="value">{{ userName }}</span>
              </div>
              <div class="info-item">
                <span class="label">Email Address</span>
                <input v-if="isEditing" type="email" v-model="editEmail" class="edit-input" />
                <span v-else class="value">{{ userEmail }}</span>
              </div>
            </div>
          </div>

          <div class="info-section mt-4">
            <div class="section-top">
              <h3>Security Settings</h3>
            </div>
            <div class="info-grid">
              <div class="info-item">
                <span class="label">Password</span>
                <div class="password-row">
                  <input v-if="isChangingPassword" type="password" v-model="newPassword" placeholder="Enter new password" class="edit-input" />
                  <span v-else class="value">********</span>
                  <button class="action-btn" @click="togglePassword">
                    {{ isChangingPassword ? 'Save Password' : 'Change Password' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

defineProps({ t: Object, lang: String })

const router = useRouter()
const userName = ref('John Doe')
const userEmail = ref('johndoe@example.com')

const isEditing = ref(false)
const editName = ref('')
const editEmail = ref('')

const isChangingPassword = ref(false)
const newPassword = ref('')

onMounted(() => {
  const storedName = localStorage.getItem('user_name')
  const storedEmail = localStorage.getItem('user_email')
  if (storedName) userName.value = storedName
  if (storedEmail) userEmail.value = storedEmail
})

const initials = computed(() => {
  const parts = userName.value.split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  } else if (parts.length === 1 && parts[0].length > 0) {
    return parts[0][0].toUpperCase()
  }
  return 'JD'
})

function toggleEdit() {
  if (isEditing.value) {
    userName.value = editName.value
    userEmail.value = editEmail.value
    localStorage.setItem('user_name', userName.value)
    localStorage.setItem('user_email', userEmail.value)
  } else {
    editName.value = userName.value
    editEmail.value = userEmail.value
  }
  isEditing.value = !isEditing.value
}

function togglePassword() {
  if (isChangingPassword.value) {
    if (newPassword.value) {
      localStorage.setItem('user_password', newPassword.value)
      alert('Password updated successfully!')
    }
  } else {
    newPassword.value = ''
  }
  isChangingPassword.value = !isChangingPassword.value
}

function handleLogout() {
  localStorage.removeItem('user_name')
  localStorage.removeItem('user_email')
  router.push('/login')
}
</script>

<style scoped>
.profile-page {
  min-height: calc(100vh - 80px);
  background: #F4FBFC;
  padding-bottom: 100px;
}
.profile-header-bg {
  height: 200px;
  width: 100%;
  background: linear-gradient(135deg, #1A6B6B 0%, #2B9090 100%);
}
.profile-container {
  margin-top: -80px;
  padding: 0 20px;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
}
.profile-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(26,107,107,0.08);
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  border: 1px solid rgba(43,144,144,0.1);
}

/* Header */
.profile-user-header {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 30px 40px;
  border-bottom: 1px solid rgba(43,144,144,0.08);
  background: #FAFCFC;
}
.avatar-wrapper {
  flex-shrink: 0;
}
.avatar {
  background: #2B9090;
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}
.profile-titles {
  flex: 1;
}
.profile-titles h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  color: #1A2A2A;
  margin-bottom: 4px;
}
.profile-titles p {
  color: #6A8080;
  font-size: 1rem;
}

/* Content */
.profile-content {
  padding: 40px;
}

.section-top {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-section h3 {
  font-size: 1.2rem;
  color: #1A6B6B;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.info-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(43,144,144,0.08);
}
.info-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.info-item .label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #8FA8A8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.info-item .value {
  font-size: 1.05rem;
  color: #1A2A2A;
  font-weight: 500;
}

/* Edit Inputs and Buttons */
.edit-input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid rgba(43,144,144,0.3);
  font-family: inherit;
  font-size: 1rem;
  color: #1A2A2A;
  background: #F4FAFA;
}
.edit-input:focus {
  outline: none;
  border-color: #2B9090;
  box-shadow: 0 0 0 3px rgba(43,144,144,0.1);
}
.password-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.edit-btn {
  background: #1A6B6B;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}
.edit-btn:hover {
  background: #2B9090;
}

.action-btn {
  background: white;
  color: #1A6B6B;
  border: 1px solid rgba(43,144,144,0.3);
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}
.action-btn:hover {
  background: #F4FAFA;
  border-color: #1A6B6B;
}

.logout-btn {
  background: white;
  color: #E53935;
  border: 1px solid rgba(229,57,53,0.3);
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}
.logout-btn:hover {
  background: #FFF1F1;
  border-color: #E53935;
}

.mt-4 {
  margin-top: 40px;
}

@media (max-width: 600px) {
  .profile-user-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    padding: 30px 20px;
  }
  .profile-content {
    padding: 30px 20px;
  }
  .section-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
