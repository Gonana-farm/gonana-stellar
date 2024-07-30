use soroban_sdk::{contract, contractimpl, contracttype, token, Address, Env};

#[derive(Clone)]
#[contracttype]
pub enum DataKey {
    Admin
}

fn get_balance(e: &Env, contract_id: &Address) -> i128 {
    let client = token::Client::new(e, contract_id);
    client.balance(&e.current_contract_address())
}
#[contract]
pub struct Gonana;

#[contractimpl]
impl Gonana {
   
    pub fn initialize(env:Env, admin: Address) {
        env.storage().instance().set(&DataKey::Admin, &admin)
    }

    pub fn deposit(e:Env, amount:i128) {

    }
    pub fn withdraw(e:Env){

    }
    pub fn balance_of_contract(e:Env) -> i128{
        let balance = get_balance(&e, &e.current_contract_address());
        balance

    }
}

#[test]
fn test() {
    let env = Env::default();
    let contract_id = env.register_contract(None, Gonana);
    let _client = GonanaClient::new(&env, &contract_id);

}
