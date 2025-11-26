{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.git
    pkgs.firebase-tools
  ];

  shellHook = ''
    echo "Welcome to PAJ Automation Hub development environment!"
  '';
}
