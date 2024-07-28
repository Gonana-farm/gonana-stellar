use soroban_sdk::{contract, contractimpl, vec, symbol_short, Env, Symbol, Vec};

#[contract]
pub struct Gonana;

#[contractimpl]
impl Gonana {
    pub fn hello(env: Env, to: Symbol) -> Vec<Symbol> {
        vec![&env, symbol_short!("Hello"), to]
    }
}

#[test]
fn test() {
    let env = Env::default();
    let contract_id = env.register_contract(None, Gonana);
    let client = GonanaClient::new(&env, &contract_id);

    let words = client.hello(&symbol_short!("Dev"));

    assert_eq!(words, vec![&env, symbol_short!("Hello"), symbol_short!("Dev"),]);
}
