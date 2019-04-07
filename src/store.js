import Vue from 'vue'
import Vuex from 'vuex'
import DB from './db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DB: DB,
    isLogin: false
  },
  mutations: {
    login (state) {
      state.isLogin = true
    },
    reduceMoney (state, transaction) {
      state.DB.balance -= transaction.amount
    },
    addMoney (state, { amount }) {
      state.DB.balance += amount
    },
    makeTransaction (state, transaction) {
      state.DB.transactions.push(transaction)
    },
    updateTransaction (state, newTran) {
      state.DB.transactions = state.DB.transactions.map(oldTran => { return oldTran.id === newTran.id ? newTran : oldTran })
    }

  },
  actions: {
    login ({ commit }) {
      commit('login')
    },
    /*
     transaction : {
       title ชื่อ
       amount จำนวนเงิน
       type 'WITHDRAW' | 'DEPOSIT'
       date วันที่
       status 'WAITING' ยังไม่อนุมัติ | 'CONFIRMED' อนุมัติอล้ว
       paidUsers เฉพาะเรียกเก็บ คนจ่ายแล้ว
       issuedUserID เฉพาะเบิกเงิน คนจขอเบิก
     }
   */
    makeTransaction ({ commit }, detail) {
      const transaction = {
        id: Math.floor(Math.random() * 2000),
        title: detail.title,
        amount: detail.amount,
        type: detail.type,
        date: Date(),
        status: 'WAITING'
      }
      switch (detail.type) {
        case 'WITHDRAW':
          transaction.issuedUserID = detail.userId
          break
        case 'DEPOSIT':
          transaction.paidUsers = []
      }
      commit('makeTransition', transaction)
    },
    pay ({ commit, state }, payload) {
      /*
        payload {
          id รายการจ่ายเงิน
          userId คนจ่ายเงิน
        }
       */
      const transaction = state.DB.transactions.find(x => { return x.id === payload.id })
      commit('addMoney', transaction.amount)
      commit('updateTransaction', { ...transaction, paidUsers: [...transaction.paidUsers, payload.userId] })
    },
    confirmWithdraw ({ commit, state }, targetId) {
      const targetTransaction = state.DB.transaction.find(x => { return x.id === targetId })
      commit('updateTransaction', { ...targetTransaction, status: 'CONFIRMED' })
      commit('reduceMoney', targetTransaction)
    }
  },
  getters: {
    getAllUsers (state) {
      return state.DB.users
    },
    getAllTransactions (state) {
      return state.DB.transactions
    },
    getPaymentStatusById (state) {
      return (userId, transactionId) => {
        const targetTransaction = state.DB.transactions.find(x => { return x.id === transactionId })
        const paidUsers = targetTransaction.paidUsers
        const allUserIds = state.DB.users.map(user => { return user.id })
        const allPaid = paidUsers.length === allUserIds.length
        if (allPaid) {
          return 'จ่ายครบทุกคนแล้ว'
        } else if (paidUsers.indexOf(userId) !== -1 && !allPaid) {
          return `จ่ายแล้ว แต่มีคนยังไม่จ่าย ${allUserIds.length - paidUsers} คน`
        } else if (paidUsers.indexOf(userId) === -1) {
          return 'ยังไม่ได้จ่าย'
        }
      }
    }
  }
})
